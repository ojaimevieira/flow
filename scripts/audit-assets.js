import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Padrões para encontrar URLs de imagem
const IMAGE_URL_PATTERNS = [
  /src\s*=\s*["'](https:\/\/images\.unsplash\.com\/[^"']+)["']/g,
  /src\s*=\s*["'](https:\/\/picsum\.photos\/[^"']+)["']/g,
  /src\s*=\s*["'](https:\/\/via\.placeholder\.com\/[^"']+)["']/g,
  /src\s*=\s*["'](https:\/\/[^"']*\.(?:jpg|jpeg|png|webp|gif)[^"']*)["']/g
];

const templatesDir = path.join(__dirname, '..', 'src', 'templates');
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

console.log('🔍 AUDITANDO ASSETS NOS TEMPLATES...\n');

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const urls = [];
  
  IMAGE_URL_PATTERNS.forEach(pattern => {
    let match;
    const regex = new RegExp(pattern);
    while ((match = regex.exec(content)) !== null) {
      urls.push({
        url: match[1],
        line: content.substring(0, match.index).split('\n').length,
        context: match[0]
      });
    }
  });
  
  return urls;
}

function scanTemplate(templateName) {
  const templateDir = path.join(templatesDir, templateName);
  
  if (!fs.existsSync(templateDir)) {
    return { files: 0, urls: [] };
  }
  
  const results = { files: 0, urls: [] };
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        results.files++;
        const urls = scanFile(fullPath);
        if (urls.length > 0) {
          results.urls.push({
            file: path.relative(templatesDir, fullPath),
            urls: urls
          });
        }
      }
    });
  }
  
  scanDirectory(templateDir);
  return results;
}

// Escanear todos os templates
const templates = fs.readdirSync(templatesDir).filter(name => 
  fs.statSync(path.join(templatesDir, name)).isDirectory()
);

const auditResults = {};
let totalUrls = 0;
let totalFiles = 0;

console.log('📊 RESULTADO DO AUDIT:\n');

templates.forEach(templateName => {
  const result = scanTemplate(templateName);
  auditResults[templateName] = result;
  
  const urlCount = result.urls.reduce((sum, fileInfo) => sum + fileInfo.urls.length, 0);
  totalUrls += urlCount;
  totalFiles += result.files;
  
  console.log(`📁 ${templateName}:`);
  console.log(`   Arquivos: ${result.files}`);
  console.log(`   URLs externas: ${urlCount}`);
  
  if (urlCount > 0) {
    result.urls.forEach(fileInfo => {
      console.log(`   📄 ${fileInfo.file}:`);
      fileInfo.urls.forEach(urlInfo => {
        const shortUrl = urlInfo.url.length > 60 ? 
          urlInfo.url.substring(0, 60) + '...' : urlInfo.url;
        console.log(`      ${shortUrl}`);
      });
    });
  }
  console.log('');
});

console.log('📈 ESTATÍSTICAS GERAIS:');
console.log(`   Templates escaneados: ${templates.length}`);
console.log(`   Arquivos analisados: ${totalFiles}`);
console.log(`   URLs externas encontradas: ${totalUrls}`);

// Salvar resultado detalhado
const detailedReport = {
  timestamp: new Date().toISOString(),
  summary: {
    templates: templates.length,
    files: totalFiles,
    externalUrls: totalUrls
  },
  details: auditResults
};

fs.writeFileSync(
  path.join(__dirname, 'assets-audit-report.json'),
  JSON.stringify(detailedReport, null, 2)
);

console.log('\n💾 Relatório detalhado salvo em: scripts/assets-audit-report.json');
console.log('🚀 Próximo passo: node scripts/organize-assets.js');
