// Renders each .page in template.html to a PNG under ./shots, so you can
// review the whole document without opening the final PDF each time.
// Requires puppeteer-core (see package.json in this folder) and a local
// Chrome install - update CHROME below if yours lives somewhere else.
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const HTML = 'file:///' + path.resolve(__dirname, 'template.html').replace(/\\/g, '/');
const OUT = path.resolve(__dirname, 'shots');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
  const page = await browser.newPage();
  // 297mm x 210mm at 96dpi, 2x scale for a crisp review image
  await page.setViewport({ width: 1123, height: 795, deviceScaleFactor: 2 });
  await page.goto(HTML, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const pages = await page.$$('.page');
  console.log('found', pages.length, 'pages');
  for (let i = 0; i < pages.length; i++) {
    const fname = path.join(OUT, `page-${String(i + 1).padStart(2, '0')}.png`);
    await pages[i].screenshot({ path: fname });
    console.log('saved', fname);
  }
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
