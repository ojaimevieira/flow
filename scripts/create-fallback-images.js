import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '..', 'src', 'assets');

console.log('🎨 CRIANDO IMAGENS DE FALLBACK...\n');

// Cores por template
const templateColors = {
  'edicao-imagens-ia': {
    primary: '#3b82f6',
    secondary: '#1e40af',
    accent: '#06b6d4'
  },
  'template-1': {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#a855f7'
  },
  'gestao-saude': {
    primary: '#22c55e',
    secondary: '#16a34a',
    accent: '#15803d'
  },
  'filmagente': {
    primary: '#ef4444',
    secondary: '#dc2626',
    accent: '#b91c1c'
  }
};

// Criar imagem com gradiente
async function createGradientImage(width, height, colors, filename) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <circle cx="20%" cy="30%" r="15%" fill="white" fill-opacity="0.1"/>
      <circle cx="80%" cy="70%" r="20%" fill="white" fill-opacity="0.05"/>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .webp({ quality: 80 })
    .toFile(filename);
}

// Criar imagem com texto
async function createTextImage(width, height, text, colors, filename) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:0.9" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
            fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">
        ${text}
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .webp({ quality: 80 })
    .toFile(filename);
}

async function createFallbackImages() {
  // Edicao Imagens IA
  const edicaoDir = path.join(assetsDir, 'edicao-imagens-ia');
  if (!fs.existsSync(edicaoDir)) fs.mkdirSync(edicaoDir, { recursive: true });
  
  await createTextImage(500, 500, 'ANTES', templateColors['edicao-imagens-ia'], 
    path.join(edicaoDir, 'produto_antes_500x500.webp'));
  await createTextImage(500, 500, 'DEPOIS', templateColors['edicao-imagens-ia'], 
    path.join(edicaoDir, 'produto_depois_500x500.webp'));
  await createGradientImage(500, 500, templateColors['edicao-imagens-ia'], 
    path.join(edicaoDir, 'hero_500x500.webp'));
  
  console.log('✅ Criadas imagens para edicao-imagens-ia');
  
  // Template-1
  const template1Dir = path.join(assetsDir, 'template-1');
  if (!fs.existsSync(template1Dir)) fs.mkdirSync(template1Dir, { recursive: true });
  
  await createGradientImage(600, 800, templateColors['template-1'], 
    path.join(template1Dir, 'hero_600x800.webp'));
  await createGradientImage(600, 400, templateColors['template-1'], 
    path.join(template1Dir, 'ferramenta_600x400.webp'));
  await createTextImage(120, 120, 'TOOL', templateColors['template-1'], 
    path.join(template1Dir, 'icone_120x120.webp'));
  await createGradientImage(600, 400, templateColors['template-1'], 
    path.join(template1Dir, 'demo_600x400.webp'));
  
  console.log('✅ Criadas imagens para template-1');
  
  // Gestao Saude
  const gestaoDir = path.join(assetsDir, 'gestao-saude');
  if (!fs.existsSync(gestaoDir)) fs.mkdirSync(gestaoDir, { recursive: true });
  
  await createGradientImage(1000, 600, templateColors['gestao-saude'], 
    path.join(gestaoDir, 'hero_1000x600.webp'));
  
  console.log('✅ Criadas imagens para gestao-saude');
  
  // Filmagente
  const filmDir = path.join(assetsDir, 'filmagente');
  if (!fs.existsSync(filmDir)) fs.mkdirSync(filmDir, { recursive: true });
  
  await createGradientImage(1200, 800, templateColors['filmagente'], 
    path.join(filmDir, 'background.webp'));
  
  console.log('✅ Criadas imagens para filmagente');
}

createFallbackImages()
  .then(() => {
    console.log('\n🎉 TODAS AS IMAGENS DE FALLBACK CRIADAS!');
    console.log('📊 Total: 8 imagens WEBP otimizadas');
    console.log('🔄 Agora execute: node scripts/update-imports.js');
  })
  .catch(console.error);
