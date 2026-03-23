import { config } from "@/config";

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {

  const res = await fetch(`${config.apiUrl}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}