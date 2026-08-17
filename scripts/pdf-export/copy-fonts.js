// Copies the Montserrat weights this template uses out of the
// @fontsource package already installed for the live site, so the PDF
// build stays self-contained without committing binary font files to git.
const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '../../node_modules/@fontsource/montserrat/files');
const OUT = path.resolve(__dirname, 'fonts');

const weights = ['300', '400', '500', '600'];

fs.mkdirSync(OUT, { recursive: true });
for (const w of weights) {
  const src = path.join(SRC, `montserrat-latin-ext-${w}-normal.woff2`);
  const out = path.join(OUT, `montserrat-${w}.woff2`);
  fs.copyFileSync(src, out);
  console.log('copied', path.basename(out));
}
