export type CategoryItem = {
  title: string;
  slug: string;
  image: string;
};

export const PRODUCT_CATEGORIES: Record<string, CategoryItem[]> = {
  walling: [
    {
      title: "Hotham",
      slug: "hotham",
      image: "/products/walling/Hotham-thumb.webp",
    },
    {
      title: "Blue Ridge",
      slug: "blue-ridge",
      image: "/products/walling/BlueRidge-Thumb.webp",
    },
    {
      title: "Kakadu",
      slug: "kakadu",
      image: "/products/walling/Kakadu-Thumb.webp",
    },
    {
      title: "Wyndham",
      slug: "wyndham",
      image: "/products/walling/Wyndham-Thumb.webp",
    },
    {
      title: "Grange",
      slug: "grange",
      image: "/products/walling/Grange-Thumb.webp",
    },
  ],

  paving: [
    {
      title: "Bluestone",
      slug: "bluestone",
      image: "/products/paving/Bluestone-thumb.webp",
    },
    {
      title: "Sandstone",
      slug: "sandstone",
      image: "/products/paving/Sandstone-thumb.webp",
    },
    {
      title: "Limestone",
      slug: "limestone",
      image: "/products/paving/Limestone-thumb.webp",
    },
    {
      title: "Granite",
      slug: "wyndham",
      image: "/products/paving/Granite-thumb.webp",
    },
    {
      title: "Travertine / Custom Cuts",
      slug: "travertine-custom-cuts",
      image: "/products/paving/Travertine-thumb.webp",
    },
  ],

  brick: [
    {
      title: "",
      slug: "hotham",
      image: "/products/brick/brick-thumb-1.webp",
    },
    {
      title: "",
      slug: "blue-ridge",
      image: "/products/brick/brick-thumb-2.webp",
    },
    {
      title: "",
      slug: "kakadu",
      image: "/products/brick/brick-thumb-3.webp",
    },
    {
      title: "",
      slug: "wyndham",
      image: "/products/brick/brick-thumb-4.webp",
    }, 
  ],
};
