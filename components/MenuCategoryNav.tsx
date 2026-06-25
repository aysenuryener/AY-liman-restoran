function slugify(category: string) {
  return category
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-");
}

export { slugify };

export function MenuCategoryNav({ categories }: { categories: string[] }) {
  return (
    <nav className="sticky top-0 z-20 -mx-6 flex gap-2 overflow-x-auto bg-cream/95 px-6 py-3 backdrop-blur-sm">
      {categories.map((category) => (
        <a
          key={category}
          href={`#${slugify(category)}`}
          className="flex-shrink-0 rounded-xl border border-terracotta/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-terracotta hover:text-cream-soft"
        >
          {category}
        </a>
      ))}
    </nav>
  );
}
