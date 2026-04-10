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

export const formSchemas = {
  contact: {
    type: "contact",
    fields: [
      { name: "name", type: "text", label: "Name", required: true },
      { name: "email", type: "email", label: "Email", required: true },
      { name: "phone", type: "phone", label: "Phone", required: true },
      {
        name: "product_id",
        type: "select",
        label: "Product",
        required: true,
        optionsFrom: "products",
      },
      { name: "message", type: "textarea", label: "Message", required: true },
      {
        name: "terms",
        type: "checkbox",
        label: "I agree to the",
        linkText: "Privacy Policy",
        link: "/privacy-policy",
        required: true,
        hideLabel: true,
      },
    ],
  },
  samples: {
    type: "samples",
    title: "Request Free Samples",
    description: "Fill your details and we will send samples to you.",
    size: "md",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Name",
        required: true,
        col: {
          md: 6,
          xs: 12,
        },
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        required: true,
        col: {
          md: 6,
          xs: 12,
        },
      },
      {
        name: "phone",
        type: "phone",
        label: "Phone",
        required: true,
        col: {
          md: 6,
          xs: 12,
        },
      },
      {
        name: "address",
        type: "text",
        label: "Home address for Samples Delivery",
        placeholder: "Enter a location",
        required: true,
        col: {
          md: 6,
          xs: 12,
        },
      },

      {
        name: "stone_quantity",
        type: "select",
        label: "How much stone do you require?",
        required: true,
        helpText: "In SQM",
        col: {
          md: 6,
          xs: 12,
        },
        options: [
          { id: "1-10", label: "1-10" },
          { id: "10-30", label: "10-30" },
          { id: "30-80", label: "30-80" },
          { id: "80-150", label: "80-150" },
          { id: "150-300", label: "150-300" },
          { id: "300+", label: "300+ SQM" },
        ],
      },

      {
        name: "timeline",
        type: "select",
        label: "When do you need the stone?",
        required: true,
        col: {
          md: 6,
          xs: 12,
        },
        options: [
          { id: "now", label: "I need it now" },
          { id: "2-4 weeks", label: "2-4 weeks" },
          { id: "4-8 weeks", label: "4-8 weeks" },
          { id: "8-16 weeks", label: "8-16 weeks" },
          { id: "4+ months", label: "4+ months" },
        ],
      },
      {
        name: "stone_category",
        type: "select",
        label: "Which stone?",
        required: true,
        col: {
          md: 6,
          xs: 12,
        },
        optionsFrom: "categories",
      },
      {
        name: "how_did_you_hear",
        type: "select",
        label: "How did you hear of us?",
        col: {
          md: 6,
          xs: 12,
        },
        options: hearAboutOptions,
      },

      {
        name: "stones",
        type: "product-grid",
        label: "Select Stones",
        min: 1,
        max: 4,
        col: 12,
        required: true,
        hideLabel: true,
      },
      {
        name: "terms",
        type: "checkbox",
        label: "I agree to the",
        linkText: "Privacy Policy",
        link: "/privacy-policy",
        required: true,
        hideLabel: true,
      },
    ],
  },

  brochures: {
    type: "brochure_download",
    title: "Download Brochure",
    description: "Enter your details to download the brochure.",
    size: "sm",
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
        name: "how_did_you_hear",
        label: "How did you hear about us?",
        type: "select",
        required: true,
        options: hearAboutOptions,
      },
    ],
  },

  fireplace: {
    type: "fireplace_quote",
    title: "Stone Cladded Fireplace Request",
    description:
      "Complete the form below and receive your personalised quote within 24 hours.",

    steps: [
      {
        title: "Your Details",
        fields: [
          { name: "name", type: "text", label: "Name", required: true, col: 6 },
          {
            name: "email",
            type: "email",
            label: "Email",
            required: true,
            col: 6,
          },
          {
            name: "phone",
            type: "phone",
            label: "Phone",
            placeholder: "Phone",
            required: true,
            col: 6,
            hideLabel: false,
          },
          {
            name: "suburb",
            type: "text",
            label: "Suburb",
            required: true,
            col: 6,
          },
        ],
      },

      {
        title: "Fireplace\nDimensions",
        fields: [
          {
            name: "width",
            type: "number",
            label: "Width (mm)",
            required: true,
          },
          {
            name: "height",
            type: "number",
            label: "Height (mm)",
            required: true,
          },
          {
            name: "depth",
            type: "number",
            label: "Depth (mm)",
            required: true,
          },
        ],
      },

      {
        title: "Stone\nSelection",
        fields: [
          {
            name: "finish_style",
            type: "select",
            label: "Finish Style",
            required: true,
            options: [
              { id: "drystack", label: "Drystack" },
              { id: "mortar", label: "Mortar" },
            ],
          },

          {
            name: "installation_required",
            type: "select",
            label: "Stone Installation Package Required?",
            required: true,
            options: [
              { id: "yes", label: "Yes" },
              { id: "no", label: "No" },
            ],
          },

          {
            name: "product_id",
            type: "select",
            label: "Stone",
            optionsFrom: "products",
          },
        ],
      },

      {
        title: "Additional\nDetails",
        fields: [
          {
            name: "how_did_you_hear",
            type: "select",
            label: "How did you hear of us?",
            options: hearAboutOptions,
          },

          {
            name: "message",
            type: "textarea",
            label: "Message",
            placeholder:
              "Share anything about your vision, home style, or needs",
          },

          {
            name: "photo",
            type: "file",
            label: "Upload a photo of your spacess",
          },
          {
            name: "terms",
            type: "checkbox",
            label: "I agree to the",
            linkText: "Privacy Policy",
            link: "/privacy-policy",
            required: true,
            hideLabel: true,
          },
        ],
      },
    ],
  },
};
