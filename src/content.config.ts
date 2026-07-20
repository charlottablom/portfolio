import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Accent palette confirmed by Charlotta on 2026-07-17 - see
// instructions/DESIGN_SYSTEM.md. Keep in sync with the --color-* tokens
// in src/styles/global.css.
export const accentColors = [
  'dry-sage',
  'soft-linen',
  'baby-blue-ice',
  'cornflower-blue',
  'dusk-blue',
  'bubblegum-pink',
  'cornsilk',
  'pearl-aqua',
  'taupe-grey',
  'lavender',
  'periwinkle',
  'wisteria-blue',
  'teal-aqua',
  'tropical-teal',
  'light-blue',
  'ash-grey',
  'tea-green',
  'pale-amber',
] as const;

// Where a project falls in Charlotta's career - used to group the Projects
// listing under Bachelor / Master / Applied in Practice headers.
export const careerStages = ['bachelor', 'master', 'practice'] as const;

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
      accentColor: z.enum(accentColors).optional(),
      careerStage: z.enum(careerStages),
    }),
});

export const collections = { projects };
