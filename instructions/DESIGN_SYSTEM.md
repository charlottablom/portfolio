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

Confirmed by Charlotta on 2026-07-17: a fixed palette of accent colours,
used only to give each project its own identifying colour - shown as a
small full circle next to the project in listings, and used to tint that
project's image-loading animation. A project may use at most one colour
from this palette. The palette may grow over time, but should stay a
curated, named set rather than arbitrary picked-per-project colours.

| Name | RGB |
|---|---|
| dry-sage | 205, 195, 146 |
| soft-linen | 232, 229, 218 |
| baby-blue-ice | 158, 183, 229 |
| cornflower-blue | 100, 141, 229 |
| dusk-blue | 48, 76, 137 |
| bubblegum-pink | 247, 86, 124 |
| cornsilk | 255, 250, 227 |
| pearl-aqua | 153, 225, 217 |
| taupe-grey | 93, 87, 107 |
| lavender | 222, 217, 226 |
| periwinkle | 192, 185, 221 |
| wisteria-blue | 128, 161, 212 |
| teal-aqua | 117, 201, 200 |
| tropical-teal | 117, 185, 190 |
| light-blue | 168, 204, 201 |
| ash-grey | 179, 214, 198 |
| tea-green | 220, 234, 178 |
| pale-amber | 199, 214, 109 |


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