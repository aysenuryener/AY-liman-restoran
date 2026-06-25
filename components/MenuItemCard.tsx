import { SiteImage } from "@/components/SiteImage";
import { AllergenBadge } from "@/components/AllergenBadge";
import { imageExists } from "@/lib/images";
import type { MenuItem } from "@/data/menu";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex gap-4 rounded-xl bg-cream-soft p-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
        <SiteImage
          src={item.image}
          alt={item.name}
          exists={imageExists(item.image)}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg leading-snug">{item.name}</h3>
          <span className="whitespace-nowrap font-medium text-terracotta">
            {item.price} ₺
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.description}</p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber/15 px-2.5 py-1 text-xs text-amber"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink/60">
          <span className="font-medium">{item.calories} kcal</span>
          {item.allergens.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {item.allergens.map((allergen) => (
                <AllergenBadge key={allergen} allergen={allergen} />
              ))}
            </div>
          ) : (
            <span className="text-ink/40">Alerjen bildirilmemiştir</span>
          )}
        </div>
      </div>
    </article>
  );
}
