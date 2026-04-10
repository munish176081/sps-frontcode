"use client";

import { useForm, Controller, useWatch } from "react-hook-form";
import Button from "../ui/Button";
import { useSubmitLead } from "@/hooks/useSubmitLead";
import { toast } from "react-hot-toast";
import ProductGridField from "../forms/ProductGridField";
import { useStoneData } from "@/hooks/useProducts";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useModal } from "@/components/modals/ModalProvider";
import Image from "next/image";
import { formSchemas } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

type Props = {
  schema: any;
  brochure?: string;
};

export default function DynamicForm({ schema, brochure }: Props) {
  console.log("Rendering DynamicForm with schema:", schema.type);
  const { data: stoneData } = useStoneData();
  const { closeModal } = useModal();

  const [step, setStep] = useState(0);

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const validationSchema = formSchemas[schema.type];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    mode: "onChange",
    defaultValues: {},
  });

  const stoneCategory = useWatch({
    control,
    name: "stone_category",
  });

  // default category
  useEffect(() => {
    if (stoneData?.categories?.length && !stoneCategory) {
      setValue("stone_category", stoneData.categories[0].id);
    }
  }, [stoneData, stoneCategory, setValue]);

  useEffect(() => {
    console.log("FORM ERRORS:", errors);
  }, [errors]);

  const mutation = useSubmitLead();

  const onSubmit = (values: any) => {
    const formData = new FormData();

    formData.append("form_type", schema.type);
    formData.append("source_page", window.location.pathname);

    Object.entries(values).forEach(([key, value]: any) => {
      // normalize phone number
      if (key === "phone") {
        const digits = value.replace(/\D/g, "");
        formData.append(key, `+61${digits}`);
        return;
      }

      if (value instanceof File) {
        formData.append(key, value);
      } else if (value instanceof FileList) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value ?? "");
      }
    });

    if (brochure) {
      formData.append("brochure_type", brochure);
    }

    mutation.mutate(formData, {
      onSuccess: () => {
        toast.success(
          "Thanks! Your request has been sent. Our team will contact you shortly.",
        );
        reset();
        closeModal();
      },
      onError: (error: any) => {
        toast.error(
          error?.message || "Something went wrong. Please try again.",
        );
      },
    });
  };

  const formatAustralianPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 9);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;

    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  };

  // detect schema type
  const isMultiStep = schema?.steps?.length > 0;

  const currentFields = isMultiStep ? schema.steps[step].fields : schema.fields;

  const handleNext = async () => {
    const fieldNames = currentFields.map((f: any) => f.name);

    const valid = await trigger(fieldNames);

    if (!valid) return;

    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
      {/* STEP TITLE */}
      {isMultiStep && (
        <div className="form-stepper col-12 mb-4">
          <div className="stepper-wrapper">
            {schema.steps.map((stepItem: any, index: number) => {
              const active = index === step;
              const completed = index < step;

              return (
                <div key={index} className="stepper-item">
                  <div
                    className={`step-circle ${
                      active ? "active" : completed ? "completed" : ""
                    }`}
                  >
                    {index + 1}
                  </div>

                  {index !== schema.steps.length - 1 && (
                    <div
                      className={`step-line ${index < step ? "completed" : ""}`}
                    />
                  )}

                  <div className="step-label">
                    {stepItem.title
                      .split("\n")
                      .map((line: string, i: number) => (
                        <div key={i}>{line}</div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isMultiStep && (
        <div className="mobile-step-indicator">
          <div className="mobile-step-count">
            Step {step + 1} of {schema.steps.length}
          </div>

          <div className="mobile-progress">
            {schema.steps.map((_: any, index: number) => (
              <div
                key={index}
                className={`mobile-progress-dot ${
                  index <= step ? "active" : ""
                }`}
              />
            ))}
          </div>

          <div className="mobile-step-title">{schema.steps[step].title}</div>
        </div>
      )}

      {currentFields?.map((field: any) => {
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

            case "number":
              return (
                <input
                  type="number"
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
                <>
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
                </>
              );

            case "textarea":
              return (
                <textarea
                  {...register(field.name)}
                  placeholder={field.placeholder}
                  className="form-control"
                  rows={4}
                />
              );

            case "checkbox":
              return (
                <div className="col-12 d-flex align-items-center gap-2 mb-3">
                  <div className="checkbox-container">
                    <label className="checkbox">
                      <input
                        {...register(field.name)}
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
                        >
                          <path d="M4 14l8 7L24 7"></path>
                        </svg>
                      </span>

                      <span className="checkbox__textwrapper">
                        {field.label}{" "}
                        {field.link && (
                          <Link href={field.link}>{field.linkText}</Link>
                        )}
                      </span>
                    </label>
                  </div>
                </div>
              );

            case "file":
              return (
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className="form-control"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      // store real File object
                      setValue(field.name, file);

                      const previewUrl = URL.createObjectURL(file);
                      setPhotoPreview(previewUrl);
                    }}
                  />

                  {photoPreview && (
                    <div className="image-preview">
                      <Image
                        src={photoPreview}
                        alt="Preview"
                        width={180}
                        height={140}
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                      />
                    </div>
                  )}
                </div>
              );

            case "select":
              let source: any[] = [];

              if (field.options) source = field.options;
              else if (field.optionsFrom === "categories")
                source = stoneData?.categories ?? [];
              else if (field.optionsFrom === "products")
                source = stoneData?.products ?? [];
              // const options = source.map((item: any) => ({
              //   value: item.slug ?? item.value ?? item.id,
              //   label: item.name ?? item.label ?? item.title,
              // }));
              const options = source.map((item: any) => ({
                value: item.id,
                label: item.name ?? item.label ?? item.title,
              }));

              return (
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field }) => (
                    <Select
                      instanceId={field.name}
                      inputId={field.name}
                      options={options}
                      value={options.find((opt) => opt.value === field.value)}
                      onChange={(selected) => field.onChange(selected?.value)}
                    />
                  )}
                />
              );

            case "product-grid":
              return (
                <ProductGridField
                  key={stoneCategory}
                  field={field}
                  category={stoneCategory ?? null}
                  onChange={(ids) => setValue("stones", ids)}
                />
              );

            default:
              return null;
          }
        };

        const colMd =
          typeof field.col === "number" ? field.col : field.col?.md || 12;

        const colXs = typeof field.col === "number" ? 12 : field.col?.xs || 12;

        return (
          <div
            key={field.name}
            className={`col-${colXs} col-md-${colMd} form-group`}
          >
            {field.label && field.hideLabel !== true && (
              <label className="form-label">{field.label}</label>
            )}
            {renderField()}

            {errors?.[field.name] && (
              <div className="text-danger mt-1 fs-6">
                {errors[field.name]?.message as string}
              </div>
            )}
          </div>
        );
      })}

      {/* NAVIGATION */}
      <div className="col-12 d-flex gap-3 mt-3">
        {isMultiStep && step > 0 && (
          <Button
            rounded
            label="Previous"
            type="button"
            variant="black"
            size="md"
            onClick={handlePrev}
          />
        )}

        {isMultiStep && step < schema.steps.length - 1 && (
          <Button
            rounded
            type="button"
            label="Next"
            size="md"
            variant="black"
            onClick={handleNext}
          />
        )}

        {(!isMultiStep || step === schema.steps.length - 1) && (
          <Button
            rounded
            size="md"
            variant="black"
            loading={mutation.isPending}
            disabled={mutation.isPending}
            label={mutation.isPending ? "Processing..." : "Submit"}
          />
        )}
      </div>
    </form>
  );
}
