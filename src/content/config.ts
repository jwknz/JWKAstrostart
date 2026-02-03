import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

export const collections = { pages };

//    slug: z.string(), // e.g. "/" or "about"