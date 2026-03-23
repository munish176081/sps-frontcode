import { apiClient } from "./client";
import {
  ProductDetail,
  ProductResponse,
  ProductSingleResponse,
} from "@/types/product";

export async function getProducts(category?: string): Promise<ProductDetail[]> {
  const query = category ? `?category=${category}` : "";
  const res = await apiClient<ProductResponse>(`/products${query}`);
  return res.data ?? [];
}

export async function getProduct(slug: string): Promise<ProductDetail> {
  const res = await apiClient<ProductSingleResponse>(`/products/${slug}`);
  return res.data ?? [];
}
