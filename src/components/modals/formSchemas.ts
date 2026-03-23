export const hearAboutOptions = [
  { label: "Google Search", value: "google_search" },
  { label: "Google Ad", value: "google_ad" },
  { label: "Facebook Post", value: "facebook_post" },
  { label: "Instagram Post", value: "instagram_post" },
  { label: "Facebook Ad", value: "facebook_ad" },
  { label: "Instagram Ad", value: "instagram_ad" },
  { label: "TikTok Post", value: "tiktok_post" },
  { label: "Pinterest Post", value: "pinterest_post" },
  { label: "Blog Article", value: "blog_article" }
];

export const formSchemas = {
  samples: {
    type: "samples",
    title: "Request Free Samples",
    description: "Fill your details and we will send samples to you.",
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Name",
        required: true,
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
      },
      {
        name: "phone",
        type: "phone",
        placeholder: "Phone",
        required: true,
      },
      {
        name: "hear_about",
        label: "How did you hear about us?",
        type: "select",
        required: true,
        options: hearAboutOptions,
      },
    ],
  },

  brochure: {
    type: "brochure_download",
    title: "Download Brochure",
    description: "Enter your details to download the brochure.",
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "email", type: "text", placeholder: "Email" },
    ],
  },

  fireplace: {
    type: "fireplace_quote",
    title: "Fireplace Quote",
    description: "Tell us about your fireplace project.",
    fields: [
      { name: "name", type: "text", placeholder: "Name" },
      { name: "email", type: "text", placeholder: "Email" },
      { name: "suburb", type: "text", placeholder: "Suburb" },
    ],
  },
};
