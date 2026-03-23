import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "@/api/products";

export function useProducts(category?: string) {
  return useQuery({
    queryKey: ["products", category ?? "all"],
    queryFn: () => getProducts(category),
    staleTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60,
    gcTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60 * 10,
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
    staleTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60,
    gcTime: process.env.NODE_ENV === "development" ? 0 : 1000 * 60 * 10,
  });
}