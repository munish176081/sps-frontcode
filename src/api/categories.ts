import { apiClient } from "./client";
import { CategoryResponse } from "@/types/category";

export function getCategories() {
  return apiClient("/categories");
}

export async function getCategory(slug: string) {
  const query = slug ? `${slug}` : "";
  const res = await apiClient<CategoryResponse>(`/categories/${query}`);
  return res.data;
}
