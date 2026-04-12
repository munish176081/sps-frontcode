import { z } from "zod";

/*
|--------------------------------------------------------------------------
| Base Lead Schema
|--------------------------------------------------------------------------
*/

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email("Enter a valid email"),

  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine(
      (val) => /^[2-478]\d{8}$/.test(val),
      "Enter valid phone number",
    ),

  product_id: z.coerce.number().min(1, "Please select product").optional(),

  message: z
    .string()
    .min(
      30,
      "Please provide more details about your project (minimum 30 characters)",
    )
    .nullable()
    .optional(),

  terms: z
    .boolean()
    .optional()
    .refine((v) => v !== false, {
      message: "You must accept the privacy policy",
    }),

  how_did_you_hear: z
    .string()
    .optional()
    .refine((val) => val && val.length > 0, {
      message: "Please select how did you hear of us",
    }),

  honeypot: z.string().optional(),
});

/*
|--------------------------------------------------------------------------
| Fireplace Quote Schema
|--------------------------------------------------------------------------
*/

export const fireplaceSchema = leadSchema.extend({
  suburb: z.string().min(2, "Suburb is required"),

  width: z.coerce.number().min(1, "Width is required"),

  height: z.coerce.number().min(1, "Height is required"),

  depth: z.coerce.number().min(1, "Depth is required"),

  finish_style: z.string().min(1, "Select finish style"),

  installation_required: z.string().min(1, "Select option"),

  //stone: z.string().optional(),

  photo: z
    .any()
    .optional()
    .refine((file) => {
      if (!file) return true;
      return file.size <= 5 * 1024 * 1024;
    }, "Photo of your space must be smaller than 5MB"),
});

/*
|--------------------------------------------------------------------------
| Sample Quote Schema
|--------------------------------------------------------------------------
*/
export const sampleSchema = leadSchema.extend({
  address: z.string().min(5, "Address is required"),

  stone_quantity: z
    .string()
    .optional()
    .refine((val) => val && val.length > 0, {
      message: "Please select how much stone you require",
    }),

  timeline: z
    .string()
    .optional()
    .refine((val) => val && val.length > 0, {
      message: "Please select when you need the stone",
    }),

  stone_category: z.coerce
    .number()
    .min(1, "Please select stone category")
    .optional(),

  stones: z
    .array(z.coerce.number())
    .min(1, "Please select at least one stone")
    .max(4, "You can select maximum 4 stones"),
});

/*
|--------------------------------------------------------------------------
| Brochure Download Schema
|--------------------------------------------------------------------------
*/

export const brochureSchema = leadSchema.extend({});

export const formSchemas: Record<string, any> = {
  contact: leadSchema,
  samples: sampleSchema,
  fireplace_quote: fireplaceSchema,
  brochure_download: brochureSchema,
};
