# DESIGN_SYSTEM.md

# General Philosophy

This portfolio is not a collection of finished projects.

It is a curated and evolving body of multidisciplinary work at the intersection of architecture, urbanism, research and emerging technologies.

The portfolio should communicate ways of thinking rather than categories of work.

Its purpose is to demonstrate how complex spatial challenges are explored through design, analysis, research and experimentation.

Architectural projects, analytical projects, research projects and experimental work are equally valuable and should coexist naturally within the same design system.

No project type should ever be prioritised over another.


------------------------------------------------

# Design Principles

The portfolio should feel:

- timeless
- thoughtful
- calm
- multidisciplinary
- exploratory
- analytical when appropriate
- image driven when appropriate
- process driven throughout

The design should feel closer to an architectural publication or exhibition than a traditional personal website.

Avoid trends and favour longevity.


------------------------------------------------

# Visual Language

The visual language should communicate:

- clarity
- curiosity
- architectural thinking
- analytical thinking
- process
- multidisciplinary practice

The design system should never assume that projects are best represented through images alone.

Architectural drawings, GIS analysis, diagrams, workflows, sketches, research material and final proposals are all considered equally valuable forms of representation.


------------------------------------------------

# Project Presentation

Projects should be presented through modular content blocks rather than predetermined layouts.

Examples include:

- Context
- Methods
- Analysis
- Process
- Research
- Experimentation
- Design Proposal
- Drawings
- GIS Analysis
- Workflows
- Reflection
- Outcomes
- Gallery

Every project should tell its own story.

Not every project requires every module.

The design system should remain sufficiently flexible to support different forms of work while maintaining visual coherence across the portfolio.


------------------------------------------------

# Reading Depth: Preview, Collage, Full Project

Confirmed by Charlotta on 2026-07-25: select projects can offer three depths of the same story, moved between with a small stepper - a quarter circle, a half-filled circle, and a full circle, echoing the site's existing quarter-circle motif (see Animations). Preview is the project's existing cover image and pitch. Collage is a curated subset of the project's own images, captioned only, no prose - a pre-taste meant to sell the project at a glance, not explain it. Full project is the existing page, unchanged.

This is optional per project, added one project at a time rather than migrated everywhere at once. Most projects will not need it.

The collage should sell, not explain. Content whose whole purpose is to walk through a process, method, or placement logic - a workflow diagram, a criteria-overlay diagram, a site-selection diagram - belongs in the full project only, for the reader who wants to understand how the work was done. The collage is for the reader still deciding whether to look closer at all.

"Selling" is not the same as "photorealistic". A clear, well-composed map or plan sells a project just as much as a render does, especially to an audience like a municipality - GIS maps, floor plans, and sections can all belong in a collage as long as they read as a finished, legible image rather than a working diagram. Judge each project's own material on its own terms rather than assuming renders are inherently more "selling" than analytical work. Roughly 50-75% of a project's images is a reasonable range to aim for; held-back images stay real figures in the full project - nothing is deleted, just not previewed.

Skip the collage entirely (leave a project's `collageImages` field unset) when: the project has too few images (under roughly 5-6) for a meaningful split; the project's material is all one type - entirely technical/explanatory, or entirely photographic - with no distinct "selling vs explaining" subset to draw from; or the project is video-based rather than image-based. A useful test: if the "no small text" rule below ends up forcing every image in a project to the same full width, that's a sign the project isn't a good fit for a collage - a stack of identically-sized images isn't a collage, just a shorter version of the full project. Remove the collage rather than force it, as happened with Siting a New Preschool (2026-07-25): its maps all carry baked-in legends and couldn't shrink, so every image ended up full-width and the collage was dropped.

Collage images sit in a 3-column grid, each given one of three widths: `small` (1 column), `wide` (2 columns, always paired with one `small` neighbor - alternating which side that neighbor falls on from row to row, so no row is ever left with a single lone picture), or `solo` (all 3 columns, for a `wide` image with no `small` left to pair with, or for any image that deserves the extra room). An image with legible embedded text - area labels, street names, maintenance annotations, a legend - should never be `small`: shrunk to a third of the row, the text becomes illegible, defeating the point of showing a clear image in the first place. If a map or plan's legend or a data table is baked directly into the image rather than sitting in a separate margin, don't try to crop it out automatically - a blind crop risks cutting real content or leaving part of the legend visible. Use an already-clean version of the image if one exists, or leave that image out of the collage.

Clicking a collage image jumps straight to that same image inside the full project, not just to the top of the page - so the collage functions as a real way in, not just a teaser.

Technically: `collageImages` is an optional array field in each project's frontmatter (`content.config.ts`), each entry holding its own `image`, `alt`, `caption`, `span`, and optional `targetId` matching an `id` on that image's `<figure>` in the full project body. It's deliberately separate from the images already imported in the project's MDX body - the same image can appear in both places with a different crop or caption, and a project's collage never has to match its full-project image set one-to-one. The three views live on one page, toggled with plain JavaScript, no framework (`src/pages/projects/[slug].astro`, `ReadingStepper.astro`, `ProjectCollage.astro`). A small fixed arrow, visible only in the full project view, returns to the collage; it points left rather than up, matching the stepper's own left-to-right preview → collage → full-project order.


------------------------------------------------

# Layout Principles

Always prioritize:

- clarity
- hierarchy
- whitespace
- readability
- simplicity
- consistency

Less is more.

The layout should never compete with the work itself.


------------------------------------------------

# Typography

Typography should feel:

- architectural
- elegant
- understated
- highly readable

Avoid:

- decorative typography
- excessive font weights
- visually noisy layouts

Typography exists to support the work rather than define it.

Typeface: Montserrat. Confirmed by Charlotta on 2026-07-16. Self-hosted via
the @fontsource/montserrat package rather than an external font CDN, to
avoid a runtime dependency on a third-party service and keep page loads
self-contained.

Body text is styled lowercase throughout, so proper nouns lose the
capital letter that would normally signal "this is a name." Confirmed by
Charlotta on 2026-07-17: names of people, organisations, and named
programs (degree programs, software) are set in bold within prose to
compensate. Place names are left unbolded.


------------------------------------------------

# Colour

The site's own chrome (navigation, text, background, borders) stays the
neutral black-and-white palette already in place. It is not themed by
the colours below.

One deliberate exception, confirmed by Charlotta on 2026-07-27: a very
faint, fixed background texture of fine dashed horizontal lines in a
blue-ink tone, confined to the main content column (fading out at its
edges, matching `--content-max-width`/`--gutter`) rather than running
the full page width. It's a single low-opacity decorative layer behind
all page content, not a themed variant of the neutral tokens above -
those still govern the text/background/border colours everywhere.

Each project's identifying colour - shown as a small full circle (8px)
next to its title in listings, and used to tint that project's
image-loading animation and hover preview - is a hex value picked out
of that project's own imagery, rather than assigned from a shared
palette. Stored directly on the project as a hex string (`accentColor`
in its frontmatter), so it stays tied to that project's own material
rather than a separately maintained token list.

Superseded: from 2026-07-17 to 2026-07-25, projects instead drew from a
fixed, named 18-colour palette confirmed by Charlotta. Retired on
2026-07-25 - Charlotta felt the curated set had gotten stale, and
preferred each project's colour come from its own work rather than an
arbitrary shared list.


------------------------------------------------

# Images and Analytical Material

Project material may include:

- architectural drawings
- diagrams
- plans
- sections
- photography
- renderings
- GIS analysis
- maps
- workflows
- research material
- sketches
- analytical diagrams
- visualisations
- process documentation

No hierarchy should exist between analytical material and visual material.

A GIS map should be presented with the same care and importance as an architectural rendering.

Analytical work should be celebrated rather than hidden.

Confirmed by Charlotta on 2026-07-21: every image within a project's body
carries a short visible caption (a `<figcaption>`, wrapped around the
image in a `<figure>`), distinct from that image's `alt` text and from
the surrounding prose. The caption is a brief, direct label - what the
image is - not a restatement of the accessibility description or the
paragraph's narrative point. The project's cover image, shown once at
the top of the page before any body content, is the one exception and
carries no caption of its own.


------------------------------------------------

# Image Naming, Format, Sizing and Compression

Naming should be simple, clear and systematic.

Every image name should make its project and content immediately identifiable, without needing to open the file to understand what it shows.

Avoid cryptic file names, camera-generated names, or inconsistent numbering.

Images should prioritize showing their full content.

Avoid forced cropping. Prefer an image's natural proportions over fitting it into a fixed shape.

Where a consistent, near-square proportion is needed for layout, achieve it through generous surrounding space rather than cropping into the content.

Images should be presented generously and at a large size.

Large images should always be balanced by generous whitespace, so scale never feels crowded or dense.

Compression should remain invisible.

Images should be optimized so that loading never slows the experience of viewing the work, without visibly compromising the quality of the material shown.


------------------------------------------------

# Components

Components should always be:

- reusable
- responsive
- maintainable
- accessible
- minimal
- adaptable

Prefer simple solutions over complex ones.

Avoid unnecessary dependencies whenever possible.


------------------------------------------------

# Animations

Animations should remain subtle and purposeful.

Examples include:

- smooth scrolling
- fade transitions
- subtle hover interactions

Avoid:

- excessive motion
- distracting effects
- decorative animations

Movement should support navigation and readability rather than become a visual feature.

One confirmed example: the recurring quarter-circle motif (see Images and
Analytical Material) steps through its four rotations as a loading
indicator - for the page itself, and per image while that image loads -
then settles at rest. It is tied to real loading, not decorative, and
stops entirely for visitors who have requested reduced motion.


------------------------------------------------

# Accessibility and Performance

Always prioritize:

- responsive design
- accessibility
- performance
- readability
- maintainability

The portfolio should feel effortless to navigate across all devices.


------------------------------------------------

# Future Adaptability

The portfolio should evolve throughout an entire career.

The design system should therefore support future work that may not yet exist.

Examples include:

- architecture
- urban design
- landscape architecture
- research
- GIS
- AI workflows
- computational design
- teaching
- writing
- emerging technologies

Future disciplines should integrate naturally without requiring fundamental redesigns of the portfolio.


------------------------------------------------

# Design Restrictions

Claude may:

- improve accessibility
- improve responsiveness
- improve performance
- suggest new reusable components

Claude may never:

- fundamentally redesign the portfolio without approval
- prioritise trends over longevity
- privilege one discipline over another
- compromise maintainability for aesthetics


------------------------------------------------

# General Principle

This portfolio documents ways of thinking rather than merely displaying finished projects.

Good design should become almost invisible and allow the work itself to speak.

The portfolio should feel like exploring an evolving body of multidisciplinary work shaped by architecture, urbanism, research and emerging technologies.