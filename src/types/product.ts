export type CategoryProduct = {
  id: number;
  title: string;
  slug: string;
};

export type ProductDetail = {
  id: number;
  title: string;
  slug: string;
  description: string;

  category: {
    name: string;
    slug: string;
  };

  main_image: string | null;
  gallery: string[];

  sizes: {
    section: string;
    value: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  category_products: CategoryProduct[];
};

export type ProductResponse = {
  success: boolean;
  data: ProductDetail[];
};

export type ProductSingleResponse = {
  success: boolean;
  data: ProductDetail;
};
