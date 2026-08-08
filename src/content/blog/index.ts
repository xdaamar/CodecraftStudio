import { post as sukoharjo } from './jasa-pembuatan-website-sukoharjo';
import SukoharjoContent from './jasa-pembuatan-website-sukoharjo';

import { post as surakarta } from './jasa-pembuatan-website-surakarta';
import SurakartaContent from './jasa-pembuatan-website-surakarta';

import { post as googleMaps } from './cara-website-umkm-muncul-di-google';
import GoogleMapsContent from './cara-website-umkm-muncul-di-google';

export const blogPosts = [
  { ...sukoharjo, Component: SukoharjoContent },
  { ...surakarta, Component: SurakartaContent },
  { ...googleMaps, Component: GoogleMapsContent },
].sort((a, b) => b.date.localeCompare(a.date));

export const featuredPosts = blogPosts.filter((p) => p.featured);
