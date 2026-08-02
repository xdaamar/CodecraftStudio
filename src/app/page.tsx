export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-16 sm:px-6 md:py-24">
      <section className="flex flex-col gap-6 rounded-[2rem] border border-border-light bg-surface p-8 shadow-sm sm:p-12">
        <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-border-light bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
          Sprint 1 — Foundation & Navbar
        </div>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
          Damar — Web Developer & SEO Web Service
        </h1>
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          Fondasi proyek portfolio dan layanan website telah siap. Halaman ini
          menggunakan layout standar dengan lebar maksimal kontainer 600px hingga
          1152px (max-w-6xl) dan warna background #F7F7F5 sesuai arahan desain
          editorial modern.
        </p>
      </section>

      <section className="flex min-h-[50vh] flex-col justify-center rounded-[2rem] border border-border-light bg-surface p-8 shadow-sm sm:p-12">
        <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
          Scroll Test — Section Alpha
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted">
          Bagian ini disediakan untuk menguji perilaku sticky navbar serta efek
          backdrop blur saat halaman digulir pada perangkat mobile maupun
          desktop.
        </p>
      </section>

      <section className="flex min-h-[50vh] flex-col justify-center rounded-[2rem] border border-border-light bg-surface p-8 shadow-sm sm:p-12">
        <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">
          Scroll Test — Section Beta
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted">
          Pada Sprint berikutnya, area ini akan digantikan oleh komponen utama:
          Hero final, Selected Work, GIF Transition, Services, dan Contact CTA.
        </p>
      </section>
    </main>
  );
}
