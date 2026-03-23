"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useSubmitLead } from "./useSubmitLead";
import { z } from "zod";

type Props = {
  formType?: string;
  schema: z.ZodType<any>;
};

export function useLeadForm({ formType = "contact", schema }: Props) {
  const mutation = useSubmitLead();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = (values: any) => {
    if (values.honeypot) return;

    const payload = {
      form_type: formType,
      source_page: window.location.pathname,
      data: values,
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        toast.success("Message sent successfully!");
        reset();
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return {
    register,
    control,
    errors,
    reset,
    isLoading: mutation.isPending,
    onSubmit: handleSubmit(submitHandler),
  };
}