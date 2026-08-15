/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { BlogPost } from './_template';
import Link from 'next/link';

export const post: BlogPost = {
  slug: 'kenapa-website-umkm-tidak-muncul-di-google',
  title: 'Kenapa Website UMKM Tidak Muncul di Google? Ini Penyebab dan Cara Memperbaikinya',
  description: 'Website UMKM Anda tidak muncul di pencarian Google? Pelajari 7 penyebab utamanya dan ikuti panduan lengkap cara memperbaikinya agar bisnis Anda lebih mudah ditemukan.',
  cover: '/images/blog/website-umkm-tidak-muncul-google.webp',
  date: '2026-08-15',
  updatedAt: '2026-08-15',
  category: 'SEO Lokal',
  featured: true,
  readingTime: '10 menit baca',
  keywords: [
    'kenapa website UMKM tidak muncul di Google',
    'website UMKM tidak muncul di Google',
    'website bisnis tidak muncul di Google',
    'cara agar website muncul di Google',
    'website belum terindeks Google',
    'Google belum mengindeks website',
    'Google Search Console',
    'SEO website UMKM',
    'SEO lokal',
  ],
};

export default function ArticleContent() {
  return (
    <>
      <p>
        Bayangkan situasi ini: Anda baru saja menyewa jasa pembuatan website untuk warung makan atau bengkel Anda di Solo. Website sudah jadi, desainnya bagus, dan Anda sudah membagikan linknya ke grup WhatsApp. Namun, ketika pelanggan baru mencari nama warung Anda atau mengetik layanan Anda di Google, website tersebut sama sekali tidak terlihat. Bahkan di halaman kedua pun tidak ada.
      </p>

      <p>
        Kejadian ini sangat sering dialami oleh pemilik usaha kecil dan UMKM. Anda mungkin merasa frustrasi karena sudah mengeluarkan biaya namun hasilnya nihil. Jangan khawatir, Anda tidak sendirian. Masalah ini sebenarnya sangat teknis, dan kabar baiknya: ini bisa diperbaiki.
      </p>

      <h2>Website Sudah Online, Tapi Kenapa Tidak Muncul di Google?</h2>
      <p>
        Sebelum kita masuk ke penyebabnya, kita harus menyamakan persepsi. Ada perbedaan besar antara "website online", "website terindeks", dan "website memiliki ranking".
      </p>
      <ul>
        <li><strong>Website Online:</strong> File website Anda sudah di-upload ke server (hosting) dan bisa dibuka jika seseorang mengetik alamat lengkapnya secara persis (misal: <em>namatokoanda.com</em>).</li>
        <li><strong>Website Terindeks:</strong> Google sudah mengetahui keberadaan website Anda dan menyimpannya di dalam <em>database</em> mereka. Jika Anda mencari <em>site:namatokoanda.com</em> di Google dan hasilnya muncul, berarti website Anda sudah terindeks.</li>
        <li><strong>Website Memiliki Ranking:</strong> Ini adalah tujuan akhir. Website Anda tidak hanya disimpan oleh Google, tetapi dianggap cukup relevan dan berkualitas sehingga ditampilkan di halaman pertama saat pelanggan mengetik kata kunci umum seperti "jasa servis di Surakarta".</li>
      </ul>
      <p>
        Sebagian besar website UMKM yang "hilang" biasanya terhenti di tahap pertama: sudah online, tetapi belum terindeks atau gagal mendapatkan peringkat yang baik.
      </p>

      <h2>7 Penyebab Website UMKM Tidak Muncul di Google</h2>

      <h3>1. Website Belum Terindeks</h3>
      <p>
        Ini adalah alasan paling mendasar. Bayangkan Google sebagai sebuah perpustakaan raksasa. Mesin pencari menggunakan "robot laba-laba" (disebut <em>Googlebot</em> atau <em>crawler</em>) untuk berkeliling internet dan mencari buku baru. Jika robot ini belum pernah mampir ke website Anda, maka website Anda belum masuk ke rak perpustakaan Google. Akibatnya, sekeras apa pun orang mencari, mereka tidak akan menemukannya.
      </p>

      <h3>2. Website Baru Dibuat</h3>
      <p>
        Jika website Anda baru berusia beberapa hari atau minggu, sangat wajar jika belum muncul di hasil pencarian. Google membutuhkan waktu untuk menemukan, merayapi (<em>crawl</em>), dan memproses konten Anda. Bersabarlah, karena mesin pencari jutaan halaman baru setiap harinya.
      </p>

      <h3>3. Sitemap atau Technical SEO Bermasalah</h3>
      <p>
        <em>Sitemap</em> adalah peta jalan (berformat XML) yang memberitahu Google struktur seluruh halaman di website Anda. Jika peta ini tidak ada, rusak, atau kode website Anda memiliki perintah <code>noindex</code> yang tidak disengaja (yang berarti "Hei Google, jangan baca halaman ini"), maka Google akan mengabaikan website Anda sepenuhnya. Ini adalah masalah teknis yang sering terjadi pada website murah hasil <em>template</em> asal-asalan.
      </p>

      <h3>4. Konten Belum Menjawab Pencarian Pengguna</h3>
      <p>
        Google sangat cerdas dalam membaca <em>search intent</em> (niat pencarian). Jika seseorang mencari "harga jasa desain interior", mereka menginginkan angka atau estimasi. Jika website Anda hanya memajang foto ruang tamu tanpa ada teks penjelasan apa pun, Google akan menilai website Anda tidak relevan dan tidak akan menampilkannya. Konten Anda harus benar-benar menjawab apa yang dicari pelanggan.
      </p>

      <h3>5. Website Tidak Memiliki Sinyal Lokal yang Kuat</h3>
      <p>
        Untuk bisnis seperti toko ritel atau jasa panggilan, pencarian bersifat sangat lokal. Jika lokasi bisnis, halaman layanan per kota, detail informasi kontak, dan alamat Anda tidak tertulis jelas, Google bingung. Apalagi jika data di website Anda berbeda dengan data di <strong>Google Business Profile</strong>. Ketidakkonsistenan ini merusak kepercayaan mesin pencari.
      </p>

      <h3>6. Website Memiliki Sedikit Authority</h3>
      <p>
        <em>Authority</em> atau otoritas adalah reputasi website Anda di mata Google. Website baru biasanya tidak memiliki reputasi. Google akan lebih percaya jika ada website lain (eksternal) yang mereferensikan bisnis Anda, atau jika halaman-halaman di dalam website Anda sendiri saling terhubung dengan rapi (<em>internal linking</em>). Tanpa otoritas, Anda sulit mengalahkan kompetitor yang sudah bertahun-tahun beroperasi.
      </p>

      <h3>7. Website Lambat atau Buruk di Mobile</h3>
      <p>
        Saat ini, Google menggunakan sistem <em>Mobile-First Indexing</em>. Artinya, Google menilai kualitas website Anda berdasarkan tampilannya di layar <em>smartphone</em>, bukan di laptop. Jika website Anda lambat dibuka karena foto yang terlalu besar, atau tombolnya terlalu kecil untuk ditekan dengan jari, Google akan memberikan penalti peringkat. Performa lambat (terutama metrik <em>Core Web Vitals</em>) adalah pembunuh nomor satu bagi website UMKM.
      </p>

      <hr className="my-10 border-slate-200" />

      <h2>Cara Agar Website UMKM Mulai Muncul di Google</h2>
      <p>
        Kini Anda tahu penyebabnya. Berikut adalah langkah praktis yang bisa Anda atau pengelola website Anda lakukan:
      </p>
      <ul>
        <li><strong>Daftarkan website ke Google Search Console:</strong> Ini adalah alat gratis dari Google. Anda bisa secara manual memasukkan <em>link</em> website Anda dan meminta Google untuk segera mengindeksnya (<em>Request Indexing</em>).</li>
        <li><strong>Pastikan sitemap tersedia:</strong> Cek apakah website Anda memiliki file peta situs (biasanya diakses di <em>namatokoanda.com/sitemap.xml</em>). Submit sitemap ini ke dalam Google Search Console.</li>
        <li><strong>Pastikan halaman penting dapat di-crawl:</strong> Periksa apakah ada tag <code>noindex</code> yang menghalangi Google. Pastikan file <em>robots.txt</em> mengizinkan akses ke konten utama Anda.</li>
        <li><strong>Gunakan struktur heading yang benar:</strong> Jangan sekadar menebalkan teks. Gunakan H1 untuk judul utama, H2 untuk subjudul, agar Google mengerti hierarki informasi Anda.</li>
        <li><strong>Buat konten berdasarkan pertanyaan pelanggan:</strong> Tulislah artikel atau halaman layanan yang menjawab langsung keluhan pelanggan. Misalnya: "Berapa biaya servis AC di Solo Baru?"</li>
        <li><strong>Optimalkan halaman layanan:</strong> Buat satu halaman khusus untuk setiap layanan Anda agar Google bisa merangkingnya secara terpisah.</li>
        <li><strong>Tambahkan informasi lokasi bisnis:</strong> Tuliskan alamat lengkap secara jelas di halaman "Hubungi Kami" atau di <em>footer</em> website.</li>
        <li><strong>Bangun internal linking:</strong> Hubungkan artikel edukasi di blog Anda ke halaman layanan utama. Misalnya, dari artikel "Tips Merawat Kayu Jati" beri link ke halaman "Jual Furniture Jati".</li>
        <li><strong>Optimalkan gambar:</strong> Jangan mengunggah foto langsung dari kamera yang berukuran 5MB. Kompres gambar menjadi format WebP dengan ukuran di bawah 200KB.</li>
        <li><strong>Pastikan website nyaman digunakan melalui smartphone:</strong> Tes website Anda di HP. Pastikan teks mudah dibaca tanpa harus di-<em>zoom</em>.</li>
      </ul>

      <hr className="my-10 border-slate-200" />

      <h2>Bagaimana Jika Bisnis Berada di Sukoharjo, Surakarta, atau Solo Baru?</h2>
      <p>
        Bagi UMKM yang berbasis di area spesifik seperti Solo Raya, sekadar memiliki website tidaklah cukup. Anda harus menguasai <strong>SEO Lokal</strong>.
      </p>
      <p>
        Google mengutamakan relevansi jarak. Jika seorang ibu di Sukoharjo mencari "jasa cuci karpet", Google akan memprioritaskan website laundry yang berada di Sukoharjo atau Surakarta. Agar website Anda muncul, pastikan Anda menuliskan wilayah operasional Anda secara eksplisit di website. Selain itu, <strong>Google Business Profile</strong> Anda (profil di Google Maps) wajib terhubung dengan website.
      </p>
      <p>
        Konsistensi sangat penting. Jika alamat rumah makan di Solo Baru yang tertulis di Google Maps berbeda satu nomor pun dengan yang ada di website Anda, Google bisa menganggap bisnis Anda kurang kredibel.
      </p>

      <hr className="my-10 border-slate-200" />

      <h2>FAQ: Solusi Website Tidak Terindeks</h2>
      
      <details className="group border-b border-slate-200 py-4 cursor-pointer">
        <summary className="font-heading text-lg font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">Apakah website baru langsung muncul di Google?</summary>
        <p className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-100">
          Tidak. Website yang baru selesai dibuat membutuhkan waktu beberapa hari hingga beberapa minggu untuk ditemukan oleh <em>crawler</em> Google, kecuali jika Anda secara aktif mengirimkan sitemap melalui Google Search Console.
        </p>
      </details>

      <details className="group border-b border-slate-200 py-4 cursor-pointer">
        <summary className="font-heading text-lg font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">Berapa lama website baru bisa terindeks Google?</summary>
        <p className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-100">
          Umumnya memakan waktu 4 hari hingga 4 minggu. Waktu ini bisa dipersingkat jika struktur teknis website Anda bersih, ringan, dan memiliki peta situs (sitemap) yang terdaftar.
        </p>
      </details>

      <details className="group border-b border-slate-200 py-4 cursor-pointer">
        <summary className="font-heading text-lg font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">Apakah harus menggunakan Google Search Console?</summary>
        <p className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-100">
          Wajib. Alat ini adalah jalur komunikasi resmi antara website Anda dengan Google. Tanpa alat ini, Anda hanya bisa menebak-nebak mengapa website Anda tidak kunjung muncul atau mengapa pengunjung website menurun.
        </p>
      </details>

      <details className="group border-b border-slate-200 py-4 cursor-pointer">
        <summary className="font-heading text-lg font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">Apakah website UMKM wajib memiliki blog?</summary>
        <p className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-100">
          Sangat disarankan. Blog memungkinkan Anda menulis artikel edukasi yang menangkap pencarian spesifik (<em>long-tail keywords</em>) dari pelanggan yang tidak bisa dipenuhi hanya oleh halaman beranda.
        </p>
      </details>

      <details className="group border-b border-slate-200 py-4 cursor-pointer">
        <summary className="font-heading text-lg font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">Apakah website yang cepat lebih mudah muncul di Google?</summary>
        <p className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-100">
          Ya. Google sangat memperhatikan pengalaman pengguna. Website yang cepat dimuat, terutama di ponsel pintar, akan mendapatkan nilai tambah dalam peringkat dibandingkan website yang berat dan lambat.
        </p>
      </details>

      <details className="group border-b border-slate-200 py-4 cursor-pointer">
        <summary className="font-heading text-lg font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">Apakah jasa pembuatan website sudah termasuk SEO?</summary>
        <p className="mt-4 text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-100">
          Tidak selalu. Banyak layanan murah hanya mendesain tampilan luar. Pastikan Anda memilih <strong><Link href="/">jasa pembuatan website SEO friendly</Link></strong> yang sejak awal mengatur fondasi teknis, metadata, dan kecepatan agar disukai oleh Google.
        </p>
      </details>

      <hr className="my-10 border-slate-200" />

      <h2>Kalau SEO Website Terasa Terlalu Rumit, Mulai dari Fondasinya</h2>
      <p>
        Memahami struktur teknis, <em>metadata</em>, <em>sitemap</em>, hingga integrasi <em>Local SEO</em> bisa sangat membingungkan jika Anda harus mengurus bisnis sehari-hari secara bersamaan. Solusi terbaik adalah memastikan bahwa fondasi website Anda sudah dibangun dengan benar sejak awal.
      </p>
      <p>
        Website yang baik haruslah cepat, responsif di perangkat <em>mobile</em>, dan dikonfigurasi agar ramah mesin pencari. Jika Anda berada di wilayah Jawa Tengah dan sekitarnya, mulailah dengan mempercayakan pengembangan platform digital Anda kepada ahli yang peduli pada hasil bisnis Anda, bukan sekadar tampilan yang cantik.
      </p>

      <h2>Lihat Layanan Pembuatan Website</h2>
      <p>
        Jika Anda ingin melihat portfolio, paket layanan, dan konsultasi langsung, kunjungi halaman utama <strong>Code Craft Studio</strong>:
      </p>
      <p>
        👉 <strong><Link href="/">Kembali ke Beranda</Link></strong>
      </p>

      <p>Di halaman utama Anda bisa melihat:</p>
      <ul>
        <li>Portfolio project nyata</li>
        <li>Paket website untuk UMKM dan bisnis lokal</li>
        <li>Layanan optimasi SEO dan GEO</li>
        <li>Pembuatan aplikasi web dan mobile</li>
        <li>Konsultasi gratis melalui WhatsApp</li>
      </ul>

      <hr className="my-10 border-slate-200" />

      <h2>Konsultasi Website UMKM Gratis</h2>
      <p>
        Jika Anda sedang mencari <strong>website yang modern, cepat, mobile friendly, dan siap dioptimasi untuk Google Search, Google Maps, serta pencarian AI</strong>, Anda bisa berkonsultasi gratis dengan <strong>Code Craft Studio</strong> melalui WhatsApp <strong>0878-7292-6689</strong>.
      </p>
      <p>
        Konsultasi ini tidak dipungut biaya dan dapat digunakan untuk mendiskusikan kebutuhan website bisnis, company profile, landing page, maupun optimasi SEO lokal untuk wilayah <strong>Sukoharjo, Surakarta, Solo Baru, Karanganyar, Klaten, Wonogiri, dan seluruh Jawa Tengah</strong>.
      </p>

      <hr className="my-10 border-slate-200" />

      <h2>Artikel Terkait</h2>
      <ul>
        <li><Link href="/blog/cara-website-umkm-muncul-di-google">Cara Agar Website UMKM Muncul di Google Maps dan Pencarian Lokal</Link></li>
        <li><Link href="/blog/website-bisnis-solo-baru-strategi-google">Website Bisnis Solo Baru: Strategi Agar Usaha Lokal Lebih Mudah Ditemukan di Google</Link></li>
        <li><Link href="/blog/jasa-pembuatan-website-surakarta-seo-friendly">Jasa Pembuatan Website Surakarta yang SEO Friendly untuk Bisnis Lokal</Link></li>
      </ul>
    </>
  );
}
