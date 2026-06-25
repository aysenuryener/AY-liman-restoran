import type { Metadata } from "next";
import { menu } from "@/data/menu";
import { site } from "@/data/site";
import { MenuItemCard } from "@/components/MenuItemCard";
import { MenuCategoryNav, slugify } from "@/components/MenuCategoryNav";

export const metadata: Metadata = {
  title: `${site.name} — Menü`,
  description: `${site.name} menüsü: alerjen ve kalori bilgileriyle.`,
};

export default function MenuPage() {
  return (
    <main className="flex flex-1 flex-col bg-cream">
      <div className="px-6 pt-10 pb-4 text-center">
        <h1 className="font-serif text-3xl tracking-wide">{site.name} — Menü</h1>
        <p className="mt-2 text-sm text-ink/60">
          Alerjen ve kalori bilgileri her üründe belirtilmiştir.
        </p>
      </div>

      <div className="px-6">
        <MenuCategoryNav categories={menu.map((group) => group.category)} />
      </div>

      <div className="mx-auto w-full max-w-2xl flex-1 space-y-12 px-6 pb-20 pt-8">
        {menu.map((group) => (
          <section
            key={group.category}
            id={slugify(group.category)}
            className="scroll-mt-20"
          >
            <h2 className="font-serif text-2xl tracking-wide">{group.category}</h2>
            <div className="mt-5 space-y-4">
              {group.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
