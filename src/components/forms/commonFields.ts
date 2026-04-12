export const hearAboutOptions = [
  { label: "Google Search", id: "Google Search" },
  { label: "Google Ad", id: "Google Ad" },
  { label: "Facebook Post", id: "Facebook Post" },
  { label: "Instagram Post", id: "Instagram Post" },
  { label: "Facebook Ad", id: "Facebook Ad" },
  { label: "Instagram Ad", id: "Instagram Ad" },
  { label: "TikTok Post", id: "TikTok Post" },
  { label: "Pinterest Post", id: "Pinterest Post" },
  { label: "Blog Article", id: "Blog Article" },
];

export const nameField = {
  name: "name",
  type: "text",
  label: "Name",
  required: true,
};

export const emailField = {
  name: "email",
  type: "email",
  label: "Email",
  required: true,
};

export const phoneField = {
  name: "phone",
  type: "phone",
  label: "Phone",
  required: true,
};

export const termsField = {
  name: "terms",
  type: "checkbox",
  label: "I agree to the",
  linkText: "Privacy Policy",
  link: "/privacy-policy",
  required: true,
  hideLabel: true,
};

export const hearAboutField = {
  name: "how_did_you_hear",
  type: "select",
  label: "How did you hear of us?",
  options: hearAboutOptions,
};