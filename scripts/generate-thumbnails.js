import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATES = [
  { id: 'gaming', href: '/original' },
  { id: 'filmagente', href: '/film-example' },
  { id: 'restaurante-curso', href: '/restaurante-curso' },
  { id: 'edicao-imagens-ia', href: '/edicao-imagens-ia' },
  { id: 'template-1', href: '/template-1' },
  { id: 'gestao-saude', href: '/gestao-saude' },
  { id: 'foto-produto-ia', href: '/foto-produto-ia' },
  { id: 'jaimevieira', href: '/jaimevieira' }
];

const CONFIG = {
  baseUrl: 'http://localhost:8080',
  captureViewport: { width: 1200, height: 800 },
  thumbnailSize: { width: 1200, height: 800 },
  outputDir: path.join(__dirname, '..', 'public', 'thumbs'),
  webpQuality: 80
};

const browser = await chromium.launch({ headless: true });

console.log('🚀 Gerando Thumbnails 1200x800px em WEBP...\n');

for (const template of TEMPLATES) {
  try {
    const page = await browser.newPage();
    await page.setViewportSize(CONFIG.captureViewport);
    
    console.log(`📸 ${template.id}...`);
    
    await page.goto(`${CONFIG.baseUrl}${template.href}`, { 
      waitUntil: 'networkidle',
      timeout: 10000 
    });
    await page.waitForTimeout(2000);
    
    // Capturar como buffer
    const pngBuffer = await page.screenshot({ type: 'png', fullPage: false });
    
    // Converter para WEBP mantendo tamanho original
    const webpPath = path.join(CONFIG.outputDir, `${template.id}.webp`);
    await sharp(pngBuffer)
      .webp({ quality: CONFIG.webpQuality })
      .toFile(webpPath);
    
    const size = Math.round(fs.statSync(webpPath).size / 1024);
    console.log(`✅ ${template.id} → 1200x800 → ${size}KB`);
    
    await page.close();
  } catch (e) {
    console.log(`❌ ${template.id}: ${e.message}`);
  }
}

await browser.close();

// Verificar tamanhos finais
console.log('\n📊 THUMBNAILS FINAIS:');
const files = fs.readdirSync(CONFIG.outputDir).filter(f => f.endsWith('.webp'));
let totalKB = 0;

files.forEach(file => {
  const size = Math.round(fs.statSync(path.join(CONFIG.outputDir, file)).size / 1024);
  totalKB += size;
  console.log(`   ${file}: ${size}KB`);
});

console.log(`\n🎯 Total: ${totalKB}KB (média: ${Math.round(totalKB / files.length)}KB)`);
console.log('📐 Dimensões: 1200x800px - Tamanho original mantido!');
