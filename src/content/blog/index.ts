import { post as sukoharjo } from './jasa-pembuatan-website-sukoharjo';
import SukoharjoContent from './jasa-pembuatan-website-sukoharjo';

import { post as surakarta } from './jasa-pembuatan-website-surakarta';
import SurakartaContent from './jasa-pembuatan-website-surakarta';

import { post as postGoogleMaps } from './cara-website-umkm-muncul-di-google';
import { post as postSoloBaru } from './website-umkm-solo-baru-fitur-penting';
import { post as postKuliner } from './website-toko-kuliner-solo-raya';
import { post as postKesalahan } from './kesalahan-website-umkm-pelanggan-tidak-menghubungi';
import { post as postGbpSukoharjo } from './google-business-profile-umkm-sukoharjo';
import GoogleMapsContent from './cara-website-umkm-muncul-di-google';
import SoloBaruContent from './website-umkm-solo-baru-fitur-penting';
import KulinerContent from './website-toko-kuliner-solo-raya';
import KesalahanContent from './kesalahan-website-umkm-pelanggan-tidak-menghubungi';
import GbpSukoharjoContent from './google-business-profile-umkm-sukoharjo';

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
  {
    ...postKuliner,
    Component: KulinerContent,
  },
  {
    ...postKesalahan,
    Component: KesalahanContent,
  },
  {
    ...postGbpSukoharjo,
    Component: GbpSukoharjoContent,
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const featuredPosts = blogPosts.filter((p) => p.featured);
