import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	prompts: defineCollection({
		type: "data",
		schema: z.object({
			name: z.string(),
			author: z.string(),
			description: z.string(),	
			version: z.string(),
			system_prompts:z.array(z.string()),
			inputs: z.array(z.string())
		})
	}),
};
