import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Field set required by instructions/PROJECT_RULES.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
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
    coverImage: z.string(),
  }),
});

export const collections = { projects };
