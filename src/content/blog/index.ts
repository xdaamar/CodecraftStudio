import { post as sukoharjo } from './jasa-pembuatan-website-sukoharjo';
import SukoharjoContent from './jasa-pembuatan-website-sukoharjo';

import { post as surakarta } from './jasa-pembuatan-website-surakarta';
import SurakartaContent from './jasa-pembuatan-website-surakarta';

import { post as postGoogleMaps } from './cara-website-umkm-muncul-di-google';
import { post as postSoloBaru } from './website-umkm-solo-baru-fitur-penting';
import GoogleMapsContent from './cara-website-umkm-muncul-di-google';
import SoloBaruContent from './website-umkm-solo-baru-fitur-penting';

export const blogPosts = [
  { ...sukoharjo, Component: SukoharjoContent },
  { ...surakarta, Component: SurakartaContent },
  {
    ...postGoogleMaps,
    Component: GoogleMapsContent,
  },
  {
    ...postSoloBaru,
    Component: SoloBaruContent,
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const featuredPosts = blogPosts.filter((p) => p.featured);
