# DEVELOPING_INSTRUCTIONS.md

# General Philosophy

This document is the technical counterpart to PROJECT_RULES.md, DESIGN_SYSTEM.md, WRITING_INSTRUCTIONS.md and JOB_APPLICATION_RULES.md.

Where those documents describe what the portfolio communicates, this document describes how it is built and kept alive.

The portfolio must remain maintainable by a single person, without specialist help, for at least 10 years.

Prefer boring, durable technology over trends.

Optimize for low long-term maintenance burden over short-term development speed.


------------------------------------------------

# Technology Choices

Claude may recommend a technology stack.

Charlotta approves foundational technology decisions, since these are difficult to reverse.

Criteria for choosing any tool, framework or service:

- longevity and community adoption
- low maintenance burden
- minimal dependencies
- portability (avoid vendor lock-in)
- ease of understanding without deep specialist knowledge


Recommended stack:

- Framework: Astro. It generates static HTML by default and ships no JavaScript unless a component explicitly needs it, which suits a content- and image-driven portfolio and keeps performance and longevity high.
- Content: Astro Content Collections, using Markdown/MDX files with a typed schema that enforces the required fields from PROJECT_RULES.md. Content stays in plain, human-readable text files, editable without touching code.
- Styling: plain CSS using custom properties as design tokens (colour, spacing, type scale). No CSS framework, so the visual language never depends on a dependency's lifecycle.
- Images: Astro's built-in image pipeline (astro:assets), applied per the rules in "Images and Media" below.
- Interactivity: kept minimal and added only where needed (e.g. subtle transitions), using plain JavaScript or a small isolated component rather than a full application framework.

Confirmed by Charlotta on 2026-07-14. This is now the foundational stack and should be revisited only deliberately, per the change rules below.

Claude may never change the foundational stack or framework once chosen without approval.

Dependency upgrades should be deliberate, not automatic or unreviewed.


------------------------------------------------

# Content and Data Structure

Project content should be stored as structured, human-readable content files, separate from presentation code.

Content should be editable without needing to read or understand code.

The content structure must be able to hold every field required by PROJECT_RULES.md.

Avoid hardcoding project content into components or templates.


------------------------------------------------

# Folder and File Organization

Maintain a clear separation between content, components, images and documents.

Use consistent, predictable naming conventions (e.g. lowercase-kebab-case, project slugs matching titles).

Avoid deeply nested or ambiguous folder structures.

Structure should stay legible to someone returning to the project after a long absence.


------------------------------------------------

# Images and Media

Store original, full-resolution source files separately from the optimized files served on the website.

Naming should be simple, clear and systematic, matching DESIGN_SYSTEM.md:

- one folder per project, named with the project's slug (e.g. /images/oslo-housing-transformation/)
- files named by content module and sequence (e.g. context-01.jpg, process-02.jpg, outcome-01.jpg)
- no camera-generated names and no ad hoc numbering

Preserve each image's natural proportions. Do not force-crop images into a fixed shape. Where a layout needs a consistent, near-square footprint, achieve it through surrounding space (padding, a contained frame) rather than cropping into the content, so the full image always remains visible.

Display images generously and at a large size, always balanced by the generous whitespace described in DESIGN_SYSTEM.md — large should never mean crowded.

Compression should be automatic and invisible: generate modern formats (WebP, with AVIF where supported) and multiple responsive sizes at build time, so large architectural material never slows the page. As a practical guide, a served image should stay well under 500KB after optimization regardless of source resolution.

Prefer automated, systematic responsive-image handling (e.g. Astro's image pipeline) over manually maintained duplicate files.


------------------------------------------------

# Components

Components should be:

- reusable
- minimal in scope
- free of one-off logic duplicated elsewhere
- built through composition rather than special cases

Prefer extending an existing component over creating a near-duplicate.


------------------------------------------------

# Accessibility and Performance Standards

Target WCAG 2.1 AA as the minimum accessibility baseline.

Performance changes should be evaluated against real, measurable indicators (e.g. Core Web Vitals), not assumptions.

Verify changes across common devices and browsers before considering them complete.


------------------------------------------------

# Dependencies

Minimize dependencies. Every addition should be justified by a clear, ongoing need.

Avoid unmaintained or abandoned packages.

Review dependencies periodically rather than letting them go stale or accumulate unreviewed.


------------------------------------------------

# Version Control and Change Management

Write clear, meaningful commit messages.

The following are always considered major changes and require approval before implementation:

- introducing or changing the foundational framework or stack
- restructuring folders or content architecture
- deleting content, projects or files
- any visual redesign beyond incremental refinement
- adding a new external service or dependency with ongoing cost or lock-in

Routine, reversible changes (bug fixes, accessibility improvements, new components that don't alter structure, adding a new project through the existing content structure) do not require prior approval, per CLAUDE.md.

These instruction files are themselves version-controlled and part of that same history. Treat edits to them like any other meaningful change: use clear commit messages, and never silently empty or delete an instruction file. If a rule is retired or replaced, say so within the file rather than removing it, so the reasoning stays traceable over the next 10 years.


------------------------------------------------

# Testing and Verification

Before considering a change complete:

- visually verify it in a browser
- check responsiveness across breakpoints
- check for accessibility regressions
- confirm no existing content or functionality was broken

Automated tests are not required by default, but may be introduced where they reduce long-term risk (e.g. around content parsing).


------------------------------------------------

# Deployment and Hosting

Prefer stable, low-maintenance hosting with a low risk of disappearing or requiring migration.

Confirmed: Vercel, using git-based deployment and its free tier. Astro's static output is portable, so switching providers later stays low-risk if it's ever needed.

Once chosen, hosting and deployment setup should be documented so the process is not dependent on any one session's memory.

Preview deployments created for job applications (per JOB_APPLICATION_RULES.md) should be clearly labeled as previews and should not persist indefinitely — remove or archive them once the application process concludes.


------------------------------------------------

# Claude May / Claude May Never

Claude may:

- propose and implement reusable components
- improve performance and accessibility
- refactor code for maintainability as long as visible behavior is unchanged
- suggest dependency updates or removals
- add new projects through the existing content structure

Claude may never:

- introduce a new foundational framework or stack without approval
- delete content, files or projects without approval
- restructure folders or content architecture without approval
- add a dependency without stating why it is needed
- trade away accessibility or performance for faster delivery


------------------------------------------------

# Future Adaptability

The technical foundation should support new content types (e.g. GIS analysis, AI workflows, research material) without requiring a rewrite.

Prefer a flexible, general content structure over rigid, project-type-specific templates.


------------------------------------------------

# General Principle

The portfolio's technical foundation should be as calm and understated as its design: dependable, easy to reason about, and built to still make sense in 10 years.

When in doubt, choose the option a future maintainer — including a future Charlotta — could understand without re-learning the whole system.
