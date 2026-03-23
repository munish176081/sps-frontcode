"use client";

import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useSubmitLead } from "@/hooks/useSubmitLead";
import { toast } from "react-hot-toast";

type Props = {
  schema: any
  brochure?: string
}

export default function DynamicForm({ schema, brochure }: Props) {
  const { register, handleSubmit, reset } = useForm();

  const mutation = useSubmitLead();

  const onSubmit = (values: any) => {
    const payload = {
      form_type: schema.type,
      source_page: window.location.pathname,
      data: {
        ...values,
        brochure_type: brochure,
      },
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        toast.success("Form submitted successfully!");
        reset();
      },

      onError: (error: any) => {
        toast.error(
          error?.message || "Something went wrong. Please try again.",
        );
      },
    });
  };

  const formatAustralianPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;

    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
      {schema.fields.map(
        (field: {
          name: string;
          type: string;
          label?: string;
          placeholder?: string;
          options?: { value: string; label: string }[];
        }) => {
          const renderField = () => {
            switch (field.type) {
              case "text":
                return (
                  <input
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    className="form-control"
                  />
                );

              case "email":
                return (
                  <input
                    type="email"
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    className="form-control"
                  />
                );

              case "phone":
                return (
                  <div className="phone-wrapper">
                    <span className="phone-prefix">🇦🇺 +61</span>

                    <input
                      type="tel"
                      placeholder="412 345 678"
                      className="form-control phone-input"
                      {...register(field.name)}
                      onChange={(e) => {
                        e.target.value = formatAustralianPhone(e.target.value);
                      }}
                    />
                  </div>
                );

              case "select":
                return (
                  <select {...register(field.name)} className="form-control">
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                );

              default:
                return null;
            }
          };

          return (
            <div key={field.name} className="form-group">
              {field.label && (
                <label className="form-label">{field.label}</label>
              )}

              {renderField()}
            </div>
          );
        },
      )}
      <Button
        rounded
        size="md"
        variant="black"
        loading={mutation.isPending}
        disabled={mutation.isPending}
        label={mutation.isPending ? "Processing..." : "Submit"}
      />
    </form>
  );
}
