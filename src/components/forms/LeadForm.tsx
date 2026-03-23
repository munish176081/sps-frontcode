"use client";

import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema } from "@/lib/validation";
import { z } from "zod";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useSubmitLead } from "@/hooks/useSubmitLead";
import { useProducts } from "@/hooks/useProducts";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

type FormData = z.infer<typeof leadSchema>;

type Props = {
  formType: string;
};

type ProductOption = {
  value: number;
  label: string;
};

export default function LeadForm({ formType = "contact" }: Props) {
  const { data: products } = useProducts();

  const productOptions: ProductOption[] =
    products?.map((product) => ({
      value: product.id,
      label: product.title,
    })) ?? [];

  const mutation = useSubmitLead();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      terms: false,
    },
  });

  useEffect(() => {
    if (products?.length) {
      reset({
        product_id: products[0].id,
        terms: false,
      });
    }
  }, [products, reset]);

  const onSubmit = (data: FormData) => {
    if (data.honeypot) return;

    const payload = {
      form_type: formType,
      source_page: window.location.pathname,
      data,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-4 contact-form">
      {/* Name */}
      <div className="col-12">
        <label>Name</label>
        <input {...register("name")} className="form-control" />
        {errors.name && (
          <small className="text-danger">{errors.name.message}</small>
        )}
      </div>

      {/* Email */}
      <div className="col-12">
        <label>Email</label>
        <input {...register("email")} type="email" className="form-control" />
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
        )}
      </div>

      {/* Phone */}
      <div className="col-12">
        <label>Phone</label>
        <input {...register("phone")} type="tel" className="form-control" />
        {errors.phone && (
          <small className="text-danger">{errors.phone.message}</small>
        )}
      </div>

      {/* Product */}
      <div className="col-12">
        <label>Product</label>

        <Controller
          name="product_id"
          control={control}
          render={({ field }) => (
            <Select
              options={productOptions}
              placeholder="Search product..."
              isDisabled={!productOptions.length}
              value={
                productOptions.find((p) => p.value === field.value) ||
                productOptions[0] ||
                null
              }
              onChange={(option) =>
                field.onChange((option as ProductOption)?.value)
              }
              className="react-select"
              classNamePrefix="select"
            />
          )}
        />
      </div>

      {/* Message */}
      <div className="col-12">
        <label>Message</label>
        <textarea {...register("message")} rows={4} className="form-control" />
        {errors.message && (
          <small className="text-danger">{errors.message.message}</small>
        )}
      </div>

      {/* Honeypot spam protection */}
      <div className="hp-field">
        <input
          {...register("honeypot")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Privacy */}
      <div className="col-12 d-flex align-items-center gap-2 mb-3">
        <div className="checkbox-container">
          <label className="checkbox">
            <input
              {...register("terms")}
              className="checkbox__trigger visuallyhidden"
              type="checkbox"
            />
            <span className="checkbox__symbol">
              <svg
                aria-hidden="true"
                className="icon-checkbox"
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 14l8 7L24 7"></path>
              </svg>
            </span>
            <span className="checkbox__textwrapper">
              I agree to the <Link href="#">Privacy Policy</Link>
            </span>
          </label>
        </div>
      </div>
      <div className="col-12 mt-0">
        {errors.terms && (
          <small className="text-danger">{errors.terms.message}</small>
        )}
      </div>

      {/* Submit */}
      <div className="col-12">
        <Button
          rounded
          size="md"
          variant="black"
          label={mutation.isPending ? "Sending..." : "Submit"}
        />
      </div>
    </form>
  );
}
