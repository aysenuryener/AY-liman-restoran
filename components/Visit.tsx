import { site } from "@/data/site";

export function Visit() {
  return (
    <section id="ziyaret" className="bg-ink px-6 py-20 text-cream-soft sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:gap-16">
        <div>
          <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">
            Ziyaret Edin
          </h2>
          <dl className="mt-8 space-y-5 text-lg">
            <div>
              <dt className="text-sm uppercase tracking-widest text-cream-soft/60">
                Adres
              </dt>
              <dd className="mt-1">{site.address}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-cream-soft/60">
                Çalışma Saatleri
              </dt>
              <dd className="mt-1">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-cream-soft/60">
                Telefon
              </dt>
              <dd className="mt-1">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-amber">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-cream-soft/60">
                Instagram
              </dt>
              <dd className="mt-1">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber"
                >
                  {site.instagram.replace("https://", "")}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-xl">
          <iframe
            src={site.mapEmbedUrl}
            title={`${site.name} konum haritası`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
