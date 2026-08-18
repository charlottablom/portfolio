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
  ['visualization-work-at-link/apelgarden-facade.jpg', 'viz-apel-after.jpg', 2000],
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

  // arkyv-hero: a still from the renaming-views-and-sheets workflow video,
  // showing both a Revit view and Charlotta's webcam overlay. Source is
  // 1267x718 (~1.77:1). Crop tightly to just the webcam bubble and the
  // Revit elevation (top-left quadrant) - a wider/taller crop pulls in
  // a floating nav-cube icon and the video's own baked-in caption bar,
  // which clashes with our own caption overlay.
  const heroSrc = path.join(SRC, 'arkyv-marketing/renaming-views-preview.png');
  await sharp(heroSrc)
    .extract({ left: 0, top: 0, width: 480, height: 560 })
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(OUT, 'arkyv-hero.jpg'));
  console.log('arkyv-hero.jpg (re-cropped)', (fs.statSync(path.join(OUT, 'arkyv-hero.jpg')).size / 1024).toFixed(0) + 'KB');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
