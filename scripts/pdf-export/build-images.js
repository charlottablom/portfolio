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
  ['arkyv-marketing/20260814_AI-rendering-for-arkitekter.jpg', 'arkyv-hero.jpg', 2000],
  ['en-plats-pa-natten/rendering-exterior-1.jpg', 'night-exterior.jpg', 1600],
  ['en-plats-pa-natten/rendering-market-hall-1.png', 'night-markethall.jpg', 2000],
  ['en-plats-pa-natten/plan-1.jpg', 'night-plan.jpg', 2200],
  ['en-plats-pa-natten/section-indoor-1.jpg', 'night-section.jpg', 2200],
  ['ringgarden/perspective-2.JPG', 'ring-cover.jpg', 2200],
  ['hotell-stella/perspective-entrance-1.jpg', 'stella-lobby.jpg', 1600],
  ['hotell-stella/floorplan-entrance-floor-1.png', 'stella-plan-entrance.jpg', 3000],
  ['hotell-stella/floorplan-l2-1.png', 'stella-plan-l2.jpg', 3000],
  ['hotell-stella/perspecitve-restaurant-1.jpg', 'stella-restaurant.jpg', 2200],
  ['hotell-stella/perspective-city-1.jpg', 'stella-street.jpg', 2000],
  ['hotell-stella/perspective-2.jpg', 'stella-terrace.jpg', 1600],
  ['visualization-work-at-link/apelgarden-facade.jpg', 'viz-apel-after.jpg', 2000],
  ['visualization-work-at-link/apelgarden-facade-tidigare.jpg', 'viz-apel-before.jpg', 2000],
  ['visualization-work-at-link/sodra-hagalund-hyresgastanpassning-2.png', 'viz-hagalund.jpg', 1800],
  ['visualization-work-at-link/savar-flygvy.jpg', 'viz-savar.jpg', 2200],
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

  // Made with Care's collage composite is a tall 5-model portrait image;
  // cropping to the top two rows (4 of 5 models) gets close to the page
  // template's own image-box aspect ratio, so it fills the frame under
  // cover-fit instead of needing letterboxing. Only relevant if the new
  // application still uses this project with the same hero treatment.
  const careSrc = path.join(SRC, 'social-inclusion/COLLAGE models by the students.png');
  if (fs.existsSync(careSrc)) {
    const out = path.join(OUT, 'care-models.jpg');
    await sharp(careSrc)
      .extract({ left: 0, top: 55, width: 2480, height: 1926 })
      .resize({ width: 2000, withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(out);
    console.log('care-models.jpg (re-cropped)', (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
