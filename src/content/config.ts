import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage2: z
      .object({
        url: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
    hasBadge: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
