import {
  nameField,
  emailField,
  phoneField,
  termsField,
  hearAboutField,
} from "../forms/commonFields";

export const formSchemas = {
  contact: {
    type: "contact",
    fields: [
      { ...nameField },
      { ...emailField },
      { ...phoneField },
      {
        name: "product_id",
        type: "select",
        label: "Product",
        required: true,
        optionsFrom: "products",
      },
      { name: "message", type: "textarea", label: "Message", required: true },
      { ...termsField },
    ],
  },
  samples: {
    type: "samples",
    title: "Request Free Samples",
    description: "Fill your details and we will send samples to you.",
    size: "md",
    fields: [
      { ...nameField, col: { md: 6, xs: 12 } },
      { ...emailField, col: { md: 6, xs: 12 } },
      { ...phoneField, col: { md: 6, xs: 12 } },
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
      { ...hearAboutField , col: { md: 6, xs: 12 } },
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
      termsField,
    ],
  },

  brochures: {
    type: "brochure_download",
    title: "Download Brochure",
    description: "Enter your details to download the brochure.",
    size: "sm",
    fields: [
      { ...nameField },
      { ...emailField },
      { ...phoneField },
      hearAboutField,
      termsField,
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
          { ...nameField, col: { md: 6, xs: 12 } },
          { ...emailField, col: { md: 6, xs: 12 } },
          { ...phoneField, col: { md: 6, xs: 12 } },
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
          hearAboutField,
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
          termsField,
        ],
      },
    ],
  },
};
