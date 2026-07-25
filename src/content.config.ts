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
    }),
});

export const collections = { projects };
