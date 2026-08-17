# PDF portfolio export

A standalone toolchain for producing a print/PDF version of the portfolio
for job applications that ask for an attached file rather than a link.
Separate from the live Astro site - nothing here is built or deployed with
it, and it has its own `package.json` so its one extra dependency
(`puppeteer-core`, used only for the screenshot QA step) never touches the
site's own dependency tree.

`template.html` currently holds the content last used for a real
application: Swedish text, seven projects (Visualiseringsarbete på LINK,
AI-arbetsflöden på Arkyv, Ringgården, Living by Alfa, Hotell Stella, En
plats om natten, Gjord med omsorg), matching the design system in
`instructions/DESIGN_SYSTEM.md` - Montserrat, the site's ink colour, the
quarter-circle motif, generous whitespace. A4 landscape, one `<div
class="page">` per page.

## Reusing this for a new application

The layout and CSS are already solved - reuse them as-is. Only the content
needs to change:

1. **Edit `template.html` directly.** Swap in the new project selection,
   translated/adapted text, image filenames, and captions. Keep every
   `<img src="img/...">` reference pointing at a short filename you'll
   generate in step 2 - don't reference `src/content/projects` paths
   directly, since those originals are far too large for print output.
2. **Update the image list and run it**: open `build-images.js`, edit the
   `jobs` array to match whichever source images the new `template.html`
   references (each entry is `[path under src/content/projects, output
   filename, max width in px]`), then:
   ```bash
   cd scripts/pdf-export
   npm install        # first time only, installs puppeteer-core
   npm run images      # generates ./img from src/content/projects
   npm run fonts        # copies the Montserrat weights into ./fonts
   ```
3. **Review before rendering**: `npm run screenshot` renders every page to
   `./shots/page-NN.png` so you can check layout, cropping, and text
   overflow without opening a PDF each time.
4. **Render the final PDF** with headless Chrome (adjust the Chrome path
   if yours differs):
   ```bash
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="Charlotta_Blom_Portfolio.pdf" --run-all-compositor-stages-before-draw --virtual-time-budget=10000 "file:///<absolute path to>/scripts/pdf-export/template.html"
   ```

## Layout notes worth knowing before editing

- **Never combine a second layout class directly on a `.page` element**
  (e.g. `<div class="page grid-page">`). At equal CSS specificity the
  later rule in the stylesheet wins, so a second class's `height` (even
  `height: 100%`) silently overrides `.page`'s fixed `height: 210mm` and
  the page grows or shrinks to fit its content instead of staying a fixed
  A4 page. This bug recurred several times during the original build.
  Nest the second layout inside `.page` as a child div instead.
- **Give any `.fig-img`-style container `position: relative` explicitly**
  if its image uses `position: absolute; inset: 0` (several selectors do,
  to stop a tall source image's own aspect ratio from inflating a CSS
  grid row). Without it, the image escapes to the nearest positioned
  ancestor - usually `.page` - and disappears from its intended box.
- **Match a figure's box aspect ratio to the source image** rather than
  stretching a box to fill all available space and relying on
  `object-fit: contain`. A portrait image forced into a wide box (or vice
  versa) either wastes most of the box as empty grey padding or, worse,
  shrinks to an illegibly thin strip. Set an explicit `aspect-ratio` (or
  `height` + `aspect-ratio`) on the image's container instead, sized to
  roughly match the source.
- Verify every page's rendered size after changing layout CSS - a
  `sharp`-based dimension check catches the `height: 100%` bug instantly
  (any page whose screenshot aspect ratio isn't ~1.414 is wrong):
  ```js
  const sharp = require('sharp');
  const m = await sharp('shots/page-01.png').metadata();
  console.log(m.width / m.height); // should be ~1.414 for A4 landscape
  ```
