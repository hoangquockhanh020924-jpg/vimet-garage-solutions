import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'src', 'assets', 'images', 'hero');
const destDir = path.join(root, 'public', 'images', 'banners');

if (!fs.existsSync(srcDir)) {
  console.error('Source directory does not exist:', srcDir);
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter((f) => /hero-.*\.(jpg|jpeg|png|webp)$/i.test(f));

if (files.length === 0) {
  console.log('No banner files found in', srcDir);
  process.exit(0);
}

files.forEach((file) => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  fs.copyFileSync(src, dest);
  console.log('Copied', src, '→', dest);
});

console.log('Done.');
