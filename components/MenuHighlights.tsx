import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { menu } from "@/data/menu";
import { imageExists } from "@/lib/images";

const featuredIds = [
  "tas-firinda-levrek",
  "zeytinyagli-enginar",
  "ahtapot-izgara",
  "bal-cevizli-kadayif",
];

export function MenuHighlights() {
  const allItems = menu.flatMap((category) => category.items);
  const featured = featuredIds
    .map((id) => allItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="bg-cream-soft px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl tracking-wide sm:text-4xl">
          Menüden Seçmeler
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {featured.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl bg-cream">
              <div className="relative aspect-[4/3]">
                <SiteImage
                  src={item.image}
                  alt={item.name}
                  exists={imageExists(item.image)}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-xl bg-terracotta px-8 py-3 text-base font-medium text-cream-soft transition-colors hover:bg-amber"
          >
            Tüm Menü
          </Link>
        </div>
      </div>
    </section>
  );
}
