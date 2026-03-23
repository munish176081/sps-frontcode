import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/api/categories";

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: () => getCategory(slug),
    staleTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60,
    gcTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60 * 10,
  });
}