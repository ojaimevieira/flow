import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.join(__dirname, '..', 'src', 'templates');

console.log('🧹 LIMPANDO IMPORTS DUPLICADOS...\n');

// Arquivos com problemas identificados
const problematicFiles = [
  'src/templates/edicao-imagens-ia/pages/EdicaoImagensIALanding.tsx',
  'src/templates/template-1/components/HeroSection.tsx',
  'src/templates/template-1/components/ToolsSection.tsx',
  'src/templates/edicao-imagens-ia/components/HeroSection.tsx',
  'src/templates/gestao-saude/components/HeroGestaoSaude.tsx',
  'src/templates/filmagente/components/HeroFilm.tsx'
];

function cleanFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️ Arquivo não encontrado: ${filePath}`);
    return;
  }
  
  console.log(`🧹 Limpando: ${filePath}`);
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  const cleanLines = [];
  const seenImports = new Set();
  let inImportBlock = false;
  let pendingImportItems = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Detectar imports
    if (trimmed.startsWith('import ') && trimmed.includes(' from ')) {
      // Import completo em uma linha
      if (!seenImports.has(trimmed)) {
        seenImports.add(trimmed);
        cleanLines.push(line);
      }
    } else if (trimmed.startsWith('import ') && trimmed.includes('{')) {
      // Início de import multi-linha
      inImportBlock = true;
      pendingImportItems = [line];
    } else if (inImportBlock) {
      pendingImportItems.push(line);
      if (trimmed.includes('} from ')) {
        // Fim do import multi-linha
        const fullImport = pendingImportItems.join('\n');
        if (!seenImports.has(fullImport)) {
          seenImports.add(fullImport);
          cleanLines.push(...pendingImportItems);
        }
        inImportBlock = false;
        pendingImportItems = [];
      }
    } else {
      // Linha normal
      if (inImportBlock) {
        // Era um import incompleto, adicionar o que temos
        cleanLines.push(...pendingImportItems);
        inImportBlock = false;
        pendingImportItems = [];
      }
      cleanLines.push(line);
    }
  }
  
  const cleanContent = cleanLines.join('\n');
  
  if (cleanContent !== content) {
    fs.writeFileSync(fullPath, cleanContent);
    console.log(`   ✅ Arquivo limpo`);
  } else {
    console.log(`   ⭕ Já estava limpo`);
  }
}

// Limpar todos os arquivos problemáticos
problematicFiles.forEach(cleanFile);

console.log('\n🎉 LIMPEZA COMPLETA!');
console.log('🔄 Agora vou atualizar as referências de URLs...');
