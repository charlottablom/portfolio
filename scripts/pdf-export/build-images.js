// Resizes/compresses the source images this PDF template references, from
// their full-resolution originals under src/content/projects, into ./img.
// Run this after editing template.html's content for a new application -
// update the `jobs` list to match whichever images the new text references.
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.resolve(__dirname, '../../src/content/projects');
const OUT = path.resolve(__dirname, 'img');

// [sourceRelativePath, outputName, maxWidthPx]
const jobs = [
  ['living by alfa/apartment-layout-type-1.png', 'alfa-type1.jpg', 1800],
  ['arkyv-marketing/Revit-tutoring-for-it-engineers.JPG', 'arkyv-hackathon.jpg', 2000],
  ['arkyv-marketing/Skärmbild 2026-08-18 200115.png', 'arkyv-webinar.jpg', 2000],
  ['visualization-work-at-link/savar-flygvy.jpg', 'viz-savar.jpg', 2200],
  ['visualization-work-at-link/solleftea-skidstadion.jpg', 'viz-skidstadion.jpg', 2000],
  ['visualization-work-at-link/sigtuna-entrance.jpg', 'viz-sigtuna.jpg', 2000],
  ['visualization-work-at-link/sodra-hagalund-hyresgastanpassning-2.png', 'viz-hagalund.jpg', 1800],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [rel, outName, maxW] of jobs) {
    const srcPath = path.join(SRC, rel);
    const outPath = path.join(OUT, outName);
    await sharp(srcPath)
      .rotate()
      .resize({ width: maxW, withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath);
    const { size } = fs.statSync(outPath);
    console.log(outName, (size / 1024).toFixed(0) + 'KB');
  }

  // arkyv-hero: the source title slide (3508x2480, ~1.42:1) is much wider
  // than the near-square proj-main box (~1:1), so a plain centered cover-crop
  // clips the leading "AI-" off the headline and the outer edges of both
  // speaker photos. Pre-crop left-biased instead, keeping the full headline
  // and both name cards, sacrificing the mostly-empty margin near the
  // Arkyv wordmark on the right.
  const heroSrc = path.join(SRC, 'arkyv-marketing/20260814_AI-rendering-for-arkitekter.jpg');
  await sharp(heroSrc)
    .extract({ left: 450, top: 0, width: 2468, height: 2480 })
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(OUT, 'arkyv-hero.jpg'));
  console.log('arkyv-hero.jpg (re-cropped)', (fs.statSync(path.join(OUT, 'arkyv-hero.jpg')).size / 1024).toFixed(0) + 'KB');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
