import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email("Enter a valid email"),

  phone: z
    .string()
    .regex(/^(\+61|0)[2-9]\d{8}$/, "Enter valid Australian phone number"),

  product_id: z.number().optional(),

  message: z.string().min(5, "Message is required"),

  terms: z.boolean().refine((v) => v === true, {
    message: "You must accept the privacy policy",
  }),

  honeypot: z.string().optional(),
});

export const fireplaceSchema = leadSchema.extend({
  fireplace_type: z.string().min(1, "Select fireplace type"),
  postcode: z.string().min(4),
});