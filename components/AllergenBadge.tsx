export function AllergenBadge({ allergen }: { allergen: string }) {
  return (
    <span className="rounded-full border border-olive/30 bg-olive/10 px-2.5 py-1 text-xs text-olive">
      {allergen}
    </span>
  );
}
