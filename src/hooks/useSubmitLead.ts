import { useMutation } from "@tanstack/react-query";
import { submitLead } from "@/api/leads";

export function useSubmitLead() {
  return useMutation({
    mutationFn: submitLead,
  });
}