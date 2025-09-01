import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.join(__dirname, '..', 'src', 'templates');

console.log('🔄 ATUALIZANDO IMPORTS AUTOMATICAMENTE...\n');

// Mapeamento de URLs para arquivos locais
const urlMappings = {
  // Edicao Imagens IA
  'https://picsum.photos/500/500?random=100': '@/assets/edicao-imagens-ia/hero_500x500.webp',
  'https://picsum.photos/500/500?random=200': '@/assets/edicao-imagens-ia/produto_depois_500x500.webp',
  'https://via.placeholder.com/500x500/cccccc/666666?text=Produto+Antes': '@/assets/edicao-imagens-ia/produto_antes_500x500.webp',
  'https://via.placeholder.com/500x500/22c55e/ffffff?text=Produto+Depois': '@/assets/edicao-imagens-ia/produto_depois_500x500.webp',
  
  // Template-1
  'https://images.unsplash.com/photo-1619364726002-dfd4fdaee5de?w=600&h=800&fit=crop&crop=face': '@/assets/template-1/hero_600x800.webp',
  'https://picsum.photos/600/800?random=1000': '@/assets/template-1/hero_600x800.webp',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop': '@/assets/template-1/ferramenta_600x400.webp',
  'https://picsum.photos/120/120?random=4000': '@/assets/template-1/icone_120x120.webp',
  'https://picsum.photos/600/400?random=4001': '@/assets/template-1/demo_600x400.webp',
  
  // Gestao Saude
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80': '@/assets/gestao-saude/hero_1000x600.webp',
  
  // Filmagente
  'https://filmagente.jaimevieira.com/images/bg-capa_1.webp': '@/assets/filmagente/background.webp'
};

// Gerar nome de variável a partir do caminho
function generateVariableName(assetPath) {
  const filename = path.basename(assetPath, '.webp');
  const cleanName = filename
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/^(\d)/, 'img$1')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  
  // Capitalizar primeira letra de cada palavra
  return cleanName.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function updateFile(filePath, mappings) {
  console.log(`📄 Atualizando: ${path.relative(templatesDir, filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  const importsToAdd = [];
  
  // Encontrar e substituir URLs
  Object.entries(mappings).forEach(([url, assetPath]) => {
    if (content.includes(url)) {
      const varName = generateVariableName(assetPath);
      
      // Adicionar import se não existe
      const importStatement = `import ${varName} from '${assetPath}';`;
      if (!content.includes(importStatement)) {
        importsToAdd.push(importStatement);
      }
      
      // Substituir URL pela variável
      content = content.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `{${varName}}`);
      hasChanges = true;
      
      console.log(`   ✅ ${url.substring(0, 50)}... → ${varName}`);
    }
  });
  
  // Adicionar imports no topo
  if (importsToAdd.length > 0) {
    const importSection = importsToAdd.join('\n') + '\n';
    
    // Encontrar onde inserir imports (após imports existentes ou no início)
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Procurar último import
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        insertIndex = i + 1;
      } else if (lines[i].trim() === '' && insertIndex > 0) {
        // Linha vazia após imports
        break;
      } else if (insertIndex > 0 && lines[i].trim() !== '') {
        // Primeiro linha não-import após imports
        break;
      }
    }
    
    lines.splice(insertIndex, 0, '', ...importsToAdd);
    content = lines.join('\n');
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`   💾 Arquivo atualizado com ${importsToAdd.length} novos imports\n`);
  } else {
    console.log(`   ⭕ Nenhuma alteração necessária\n`);
  }
  
  return hasChanges;
}

// Escanear e atualizar arquivos
function updateTemplate(templateName) {
  const templateDir = path.join(templatesDir, templateName);
  
  if (!fs.existsSync(templateDir)) {
    console.log(`⚠️ Template ${templateName} não encontrado\n`);
    return 0;
  }
  
  console.log(`📁 Processando template: ${templateName}`);
  let filesUpdated = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const updated = updateFile(fullPath, urlMappings);
        if (updated) filesUpdated++;
      }
    });
  }
  
  processDirectory(templateDir);
  return filesUpdated;
}

// Processar todos os templates que têm mapeamentos
const templatesToUpdate = ['edicao-imagens-ia', 'template-1', 'gestao-saude', 'filmagente'];
let totalFiles = 0;

templatesToUpdate.forEach(templateName => {
  const updated = updateTemplate(templateName);
  totalFiles += updated;
});

console.log('🎉 ATUALIZAÇÃO COMPLETA!');
console.log(`📊 Total: ${totalFiles} arquivos atualizados`);
console.log('🚀 Execute: npm run dev para testar as mudanças');
