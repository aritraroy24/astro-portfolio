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
      imageSize: z.number(),
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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blogs': blogCollection,
  'videos': videoCollection,
};
