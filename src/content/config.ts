// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      duration: z.string(),
      cover: image(),
      tags: z.array(z.string()),
      pubDate: z.date(),
      type: z.string()
    }),
});
const videoCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      videoId: z.string(),
      description: z.string(),
      duration: z.string(),
      cover: image(),
      tags: z.array(z.string()),
      pubDate: z.date(),
      type: z.string()
    }),
});
const researchProjectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.string(),
      duration: z.string(),
      tags: z.array(z.string()),
      pubDate: z.date(),
      cover: image(),
      description: z.string(),
      journalName: z.string().nullable(),
      isOpenAccess: z.boolean().nullable(),
      isPinned: z.boolean().nullable(),
      journalUrl: z.string().nullable(),
      codeUrl: z.string().nullable(),
      runUrl: z.string().nullable(),
      dockerUrl: z.string().nullable(),
      newsUrl: z.string().nullable(),
      type: z.string()
    }),
})
const programmingProjectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.string(),
      duration: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      description: z.string(),
      githubUrl: z.string().nullable(),
      hostedUrl: z.string().nullable(),
      dockerUrl: z.string().nullable(),
      type: z.string()
    }),
})
export const collections = {
  'blogs': blogCollection,
  'videos': videoCollection,
  'research': researchProjectCollection,
  'programming': programmingProjectCollection,
};
