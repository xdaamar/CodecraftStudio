import { post as sukoharjo } from './jasa-pembuatan-website-sukoharjo';

export const blogPosts = [sukoharjo].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export const featuredPosts = blogPosts.filter((p) => p.featured);
