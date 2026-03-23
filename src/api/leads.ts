import { LeadPayload } from "@/types/lead";
import { apiClient } from "./client";

export function submitLead(data: LeadPayload) {
  return apiClient("/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}