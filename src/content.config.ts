import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Where a project falls in Charlotta's career - used to group the Projects
// listing under Applied in Practice / Master / Bachelor headers, most
// recent stage first (matching her CV).
export const careerStages = ['practice', 'master', 'bachelor'] as const;

// Field set required by instructions/PROJECT_RULES.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      year: z.string(),
      location: z.string().optional(),
      projectType: z.string(),
      role: z.string(),
      collaborators: z.array(z.string()).optional(),
      tools: z.array(z.string()),
      themes: z.array(z.string()),
      description: z.string(),
      coverImage: image(),
      coverImageAlt: z.string(),
      // Optional override for the Home page preview (see ProjectTimeline):
      // falls back to coverImage/coverImageAlt when not set. Useful when the
      // cover itself (e.g. a logo) isn't the most telling single image for
      // a quick preview.
      previewImage: image().optional(),
      previewImageAlt: z.string().optional(),
      // A hex color picked out of the project's own imagery (see
      // instructions/DESIGN_SYSTEM.md), rather than a fixed named palette.
      accentColor: z.string().regex(/^#[0-9a-f]{6}$/i).optional(),
      careerStage: z.enum(careerStages),
      // A curated subset (roughly 50-75%) of the project's images, for the
      // "collage" step between the cover preview and the full project (see
      // instructions/DESIGN_SYSTEM.md, "Reading depth"). Chosen to sell the
      // project at a glance - the more explanatory images (plans, diagrams,
      // charts) are deliberately left out here and saved for the full
      // project, so stepping into it reveals genuinely new material rather
      // than repeating what the collage already showed. Optional: a project
      // without this field just skips straight to the full page, unchanged.
      collageImages: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
            caption: z.string(),
            // 'wide' images are twin-width and always paired with a
            // 'small' neighbor (alternating which side it falls on from
            // row to row); a 'wide' image with no small left to pair
            // becomes 'solo', spanning the full row on its own.
            span: z.enum(['small', 'wide', 'solo']),
            // Matches the id on that same image's <figure> in the full
            // project body, so clicking it in the collage can jump
            // straight there instead of just opening the full page.
            targetId: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

export const collections = { projects };
