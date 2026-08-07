import { post as sukoharjo } from './jasa-pembuatan-website-sukoharjo';
import SukoharjoContent from './jasa-pembuatan-website-sukoharjo';

import { post as surakarta } from './jasa-pembuatan-website-surakarta';
import SurakartaContent from './jasa-pembuatan-website-surakarta';

export const blogPosts = [
  { ...sukoharjo, Component: SukoharjoContent },
  { ...surakarta, Component: SurakartaContent },
].sort((a, b) => b.date.localeCompare(a.date));

export const featuredPosts = blogPosts.filter((p) => p.featured);
