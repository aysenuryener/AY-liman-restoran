import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { site } from "@/data/site";
import { imageExists } from "@/lib/images";

export function Hero() {
  const reservationHref = site.reservationEnabled ? "#rezervasyon" : "#ziyaret";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <SiteImage
        src="/images/hero.jpg"
        alt="AY Liman — sabah ışığında mekan görünümü"
        exists={imageExists("/images/hero.jpg")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-cream-soft">
        <h1 className="font-serif text-5xl tracking-wide sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-soft/90 sm:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-xl bg-terracotta px-8 py-3 text-base font-medium text-cream-soft transition-colors hover:bg-amber"
          >
            Menüyü Gör
          </Link>
          <a
            href={reservationHref}
            className="rounded-xl border border-cream-soft/70 px-8 py-3 text-base font-medium text-cream-soft transition-colors hover:bg-cream-soft/10"
          >
            Rezervasyon
          </a>
        </div>
      </div>
    </section>
  );
}
