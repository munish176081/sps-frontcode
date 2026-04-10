import { apiClient } from "./client";


export function submitLead(data: FormData) {
  return apiClient("/leads", {
    method: "POST",
    body: data,
  });
}