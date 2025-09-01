import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 CORRIGINDO TODAS AS REFERÊNCIAS DE IMAGEM...\n');

// Substituições a fazer
const fixes = [
  // Edicao Imagens IA
  {
    file: 'src/templates/edicao-imagens-ia/pages/EdicaoImagensIALanding.tsx',
    replacements: [
      { from: 'src="{Hero500x500}"', to: 'src={ProdutoAntes500x500}' },
      { from: 'src="{ProdutoDepois500x500}"', to: 'src={ProdutoDepois500x500}' },
      { from: "'{ProdutoAntes500x500}'", to: "'/placeholder-image.jpg'" },
      { from: "'{ProdutoDepois500x500}'", to: "'/placeholder-image.jpg'" },
    ]
  },
  {
    file: 'src/templates/edicao-imagens-ia/components/HeroSection.tsx',
    replacements: [
      { from: 'src="{Hero500x500}"', to: 'src={Hero500x500}' },
      { from: 'src="{ProdutoDepois500x500}"', to: 'src={ProdutoDepois500x500}' },
      { from: 'src="{ProdutoAntes500x500}"', to: 'src={ProdutoAntes500x500}' },
    ]
  },
  // Template-1
  {
    file: 'src/templates/template-1/components/HeroSection.tsx',
    replacements: [
      { from: 'src="{Hero600x800}"', to: 'src={Hero600x800}' },
      { from: "'{Hero600x800}'", to: "'/placeholder-image.jpg'" },
    ]
  },
  {
    file: 'src/templates/template-1/components/ToolsSection.tsx',
    replacements: [
      { from: 'src="{Ferramenta600x400}"', to: 'src={Ferramenta600x400}' },
      { from: 'src="{Demo600x400}"', to: 'src={Demo600x400}' },
      { from: 'src="{Icone120x120}"', to: 'src={Icone120x120}' },
      { from: "'{Icone120x120}'", to: "'/placeholder-image.jpg'" },
      // Substituir URLs hardcoded por variáveis locais
      { from: '"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=120&fit=crop"', to: 'Icone120x120' },
      { from: '"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop"', to: 'Icone120x120' },
      { from: '"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop"', to: 'Icone120x120' },
      { from: '"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=80&h=80&fit=crop"', to: 'Icone120x120' },
      { from: '"https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=80&h=80&fit=crop"', to: 'Icone120x120' },
      { from: '`https://picsum.photos/80/80?random=${4010 + index}`', to: "'/placeholder-image.jpg'" },
    ]
  },
  // Gestão Saude
  {
    file: 'src/templates/gestao-saude/components/HeroGestaoSaude.tsx',
    replacements: [
      { from: 'src="{Hero1000x600}"', to: 'src={Hero1000x600}' },
    ]
  },
  // Filmagente
  {
    file: 'src/templates/filmagente/components/HeroFilm.tsx',
    replacements: [
      { from: 'src="{Background}"', to: 'src={Background}' },
    ]
  }
];

function applyFixes() {
  fixes.forEach(({ file, replacements }) => {
    const fullPath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️ Arquivo não encontrado: ${file}`);
      return;
    }
    
    console.log(`🔧 Corrigindo: ${file}`);
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;
    
    replacements.forEach(({ from, to }) => {
      if (content.includes(from)) {
        content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
        changed = true;
        console.log(`   ✅ ${from.substring(0, 30)}... → ${to.substring(0, 30)}...`);
      }
    });
    
    if (changed) {
      fs.writeFileSync(fullPath, content);
      console.log(`   💾 Arquivo salvo\n`);
    } else {
      console.log(`   ⭕ Nenhuma alteração necessária\n`);
    }
  });
}

applyFixes();

console.log('🎉 TODAS AS REFERÊNCIAS CORRIGIDAS!');
console.log('🚀 Execute: npm run dev para testar');
