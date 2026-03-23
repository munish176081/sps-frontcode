export type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: "contact" | "quote" | "product";
};

export type LeadPayload = {
  form_type?: string;
  source_page?: string;
  data?: Record<string, any>;
} & Lead;