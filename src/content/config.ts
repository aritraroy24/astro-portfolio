// 1. Import utilities from `astro:content`
import { string } from "astro/zod";
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
    }),
});
const videoCollection = defineCollection({
  schema:({ image }) =>
    z.object({
      title: z.string(),
      videoId: z.string(),
      description: z.string(),
      duration: z.string(),
      cover: image(),
      tags: z.array(z.string()),
      pubDate: z.date(),
    }),
});
const chemProjectCollection = defineCollection({
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
      journalUrl: z.string().nullable(),
      codeUrl: z.string().nullable(),
      runUrl: z.string().nullable(),
      dockerUrl: z.string().nullable(),
      newsUrl: z.string().nullable(),
      galleryImages: z.array(z.object({
        imgSrc: image(),
        imgAlt: z.string(),
        imgDetails: z.string()
      })).nullable()
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blogs': blogCollection,
  'videos': videoCollection,
  'chemistry': chemProjectCollection,
};
