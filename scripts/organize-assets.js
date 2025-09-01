import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar relatório da auditoria
const auditPath = path.join(__dirname, 'assets-audit-report.json');
const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));

const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const templatesDir = path.join(__dirname, '..', 'src', 'templates');

console.log('🚀 ORGANIZANDO ASSETS AUTOMATICAMENTE...\n');

// Download de imagem com retry e redirect handling
async function downloadImage(url, destPath, retries = 3) {
  return new Promise((resolve, reject) => {
    // Limpar arquivo temporário se existir
    if (fs.existsSync(destPath)) {
      try {
        fs.unlinkSync(destPath);
      } catch (err) {
        // Ignorar erro se arquivo está em uso
      }
    }
    
    const file = fs.createWriteStream(destPath);
    
    const request = https.get(url, (response) => {
      // Seguir redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        try {
          if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        } catch (err) {
          // Ignorar erro
        }
        
        console.log(`   🔄 Redirect para: ${response.headers.location}`);
        return downloadImage(response.headers.location, destPath, retries)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(destPath);
        });
        file.on('error', (err) => {
          file.close();
          try {
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
          } catch (unlinkErr) {
            // Ignorar erro
          }
          reject(err);
        });
      } else {
        file.close();
        try {
          if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        } catch (err) {
          // Ignorar erro
        }
        
        if (retries > 0) {
          console.log(`   ⚠️ Retry ${4-retries}/3 para ${url}`);
          setTimeout(() => {
            downloadImage(url, destPath, retries - 1)
              .then(resolve)
              .catch(reject);
          }, 2000);
        } else {
          reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        }
      }
    }).on('error', (err) => {
      file.close();
      try {
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      } catch (unlinkErr) {
        // Ignorar erro
      }
      
      if (retries > 0) {
        console.log(`   ⚠️ Retry ${4-retries}/3 para ${url}`);
        setTimeout(() => {
          downloadImage(url, destPath, retries - 1)
            .then(resolve)
            .catch(reject);
        }, 2000);
      } else {
        reject(err);
      }
    });
    
    // Timeout de 30 segundos
    request.setTimeout(30000, () => {
      request.abort();
      reject(new Error('Timeout: ' + url));
    });
  });
}

// Gerar nome de arquivo baseado na URL
function generateFilename(url, context, index = 0) {
  // Extrair informações do contexto
  const isHero = context.includes('hero') || context.includes('Hero');
  const isProduct = context.includes('product') || context.includes('Produto');
  const isBackground = context.includes('bg') || context.includes('background');
  
  // Extrair dimensões se presentes
  const dimensionMatch = url.match(/(\d+)x(\d+)/);
  const dimensions = dimensionMatch ? `_${dimensionMatch[1]}x${dimensionMatch[2]}` : '';
  
  let baseName = 'image';
  if (isHero) baseName = 'hero';
  else if (isProduct) baseName = 'produto';
  else if (isBackground) baseName = 'background';
  
  const suffix = index > 0 ? `_${index}` : '';
  return `${baseName}${suffix}${dimensions}.webp`;
}

// Processar template
async function processTemplate(templateName, templateData) {
  console.log(`📁 Processando template: ${templateName}`);
  
  if (templateData.urls.length === 0) {
    console.log('   ✅ Nenhuma URL externa encontrada\n');
    return;
  }
  
  // Criar diretório de assets do template
  const templateAssetsDir = path.join(assetsDir, templateName);
  if (!fs.existsSync(templateAssetsDir)) {
    fs.mkdirSync(templateAssetsDir, { recursive: true });
  }
  
  const downloadedImages = [];
  
  for (const fileInfo of templateData.urls) {
    console.log(`   📄 ${fileInfo.file}:`);
    
    for (let i = 0; i < fileInfo.urls.length; i++) {
      const urlInfo = fileInfo.urls[i];
      const url = urlInfo.url;
      
      try {
        console.log(`   📥 Baixando: ${url.substring(0, 50)}...`);
        
        const filename = generateFilename(url, urlInfo.context, i);
        const tempPath = path.join(templateAssetsDir, `temp_${filename}`);
        const finalPath = path.join(templateAssetsDir, filename);
        
        // Download
        await downloadImage(url, tempPath);
        
        // Verificar se arquivo foi baixado
        if (!fs.existsSync(tempPath)) {
          throw new Error('Arquivo não foi baixado corretamente');
        }
        
        // Converter para WEBP otimizado
        await sharp(tempPath)
          .webp({ quality: 80 })
          .toFile(finalPath);
        
        // Remover arquivo temporário com retry
        let attempts = 3;
        while (attempts > 0) {
          try {
            if (fs.existsSync(tempPath)) {
              fs.unlinkSync(tempPath);
            }
            break;
          } catch (err) {
            attempts--;
            if (attempts === 0) {
              console.log(`   ⚠️ Não foi possível remover arquivo temporário: ${tempPath}`);
            } else {
              await new Promise(resolve => setTimeout(resolve, 500));
            }
          }
        }
        
        const stats = fs.statSync(finalPath);
        console.log(`   ✅ Salvo: ${filename} (${(stats.size / 1024).toFixed(1)}KB)`);
        
        downloadedImages.push({
          originalUrl: url,
          newPath: `@/assets/${templateName}/${filename}`,
          relativePath: `src/assets/${templateName}/${filename}`,
          context: urlInfo.context,
          line: urlInfo.line,
          file: fileInfo.file
        });
        
      } catch (error) {
        console.error(`   ❌ Erro ao processar ${url}: ${error.message}`);
      }
    }
  }
  
  console.log(`   📊 ${downloadedImages.length} imagens processadas\n`);
  return downloadedImages;
}

// Atualizar imports nos arquivos
function updateFileImports(templateName, downloadedImages) {
  console.log(`🔄 Atualizando imports em ${templateName}...`);
  
  // Agrupar por arquivo
  const fileGroups = {};
  downloadedImages.forEach(img => {
    if (!fileGroups[img.file]) {
      fileGroups[img.file] = [];
    }
    fileGroups[img.file].push(img);
  });
  
  Object.entries(fileGroups).forEach(([relativeFile, images]) => {
    const filePath = path.join(templatesDir, relativeFile);
    
    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️ Arquivo não encontrado: ${relativeFile}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Adicionar imports no topo do arquivo
    const importStatements = images.map(img => {
      const varName = path.basename(img.newPath, '.webp')
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/^\d/, 'img$&'); // Prefixo se começar com número
      return `import ${varName} from '${img.newPath}';`;
    }).join('\n');
    
    // Encontrar onde inserir imports
    const importInsertPoint = content.indexOf('\n\n');
    if (importInsertPoint > 0) {
      content = content.substring(0, importInsertPoint) + 
                '\n' + importStatements + 
                content.substring(importInsertPoint);
      updated = true;
    }
    
    // Substituir URLs pelas variáveis
    images.forEach(img => {
      const varName = path.basename(img.newPath, '.webp')
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/^\d/, 'img$&');
      
      content = content.replace(img.originalUrl, `{${varName}}`);
      updated = true;
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`   ✅ Atualizado: ${relativeFile}`);
    }
  });
}

// Processar todos os templates
async function main() {
  const allDownloaded = {};
  
  for (const [templateName, templateData] of Object.entries(audit.details)) {
    if (templateData.urls.length > 0) {
      const downloaded = await processTemplate(templateName, templateData);
      if (downloaded && downloaded.length > 0) {
        allDownloaded[templateName] = downloaded;
        updateFileImports(templateName, downloaded);
      }
    }
  }
  
  // Relatório final
  console.log('🎉 ORGANIZAÇÃO COMPLETA!\n');
  console.log('📊 RESUMO FINAL:');
  
  Object.entries(allDownloaded).forEach(([template, images]) => {
    console.log(`   ${template}: ${images.length} imagens organizadas`);
  });
  
  const totalProcessed = Object.values(allDownloaded)
    .reduce((sum, images) => sum + images.length, 0);
  
  console.log(`\n📈 Total: ${totalProcessed} imagens baixadas e organizadas`);
  console.log('🔄 Execute: npm run dev para testar as mudanças');
}

main().catch(console.error);
