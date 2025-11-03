import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// Case studies collection schema
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    results: z.string(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    quote: z.string().optional(),
    quoteAuthor: z.string().optional(),
    quoteTitle: z.string().optional(),
  }),
});

// Team collection schema
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    order: z.number().default(0),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
  }),
});

// Testimonials collection schema
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    title: z.string(),
    company: z.string(),
    photo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    product: z.enum(['Product 0', 'Product 1', 'Both']).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudiesCollection,
  'team': teamCollection,
  'testimonials': testimonialsCollection,
};
