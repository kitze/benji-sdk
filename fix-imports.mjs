import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function fixImportsInFile(filePath) {
  let content = await readFile(filePath, 'utf-8');

  // Fix relative imports that don't have .js extension
  // Match: from './something' or from '../something' but NOT from './something.js' or external packages
  const importRegex = /(from\s+['"])(\.\.?\/[^'"]+)(?<!\.js)(['"])/g;

  const newContent = content.replace(importRegex, (match, prefix, path, suffix) => {
    // Don't add .js if it already ends with .js
    if (path.endsWith('.js')) return match;
    return `${prefix}${path}.js${suffix}`;
  });

  if (content !== newContent) {
    await writeFile(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

async function walkDir(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  const tsFiles = [];

  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      tsFiles.push(...await walkDir(fullPath));
    } else if (file.name.endsWith('.ts')) {
      tsFiles.push(fullPath);
    }
  }

  return tsFiles;
}

const srcDir = './src';
const files = await walkDir(srcDir);
let fixedCount = 0;

for (const file of files) {
  if (await fixImportsInFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files`);
