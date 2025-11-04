import { defineCollection, z } from 'astro:content';

// Testimonials collection schema
// Used on homepage to display customer testimonials
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    title: z.string(),
    company: z.string(),
    photo: z.string().optional(),
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    product: z.enum(['Product 0', 'Product 1', 'Both']).optional(),
  }),
});

export const collections = {
  'testimonials': testimonialsCollection,
};
