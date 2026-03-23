export function formatSlug(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function categoryTitle(slug: string) {
  if (!slug) return "";

  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
