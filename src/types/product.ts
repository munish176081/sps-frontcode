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

export type StoneCategory = {
  id: number;
  name: string;
  slug: string;
};

export type StoneProduct = {
  id: number;
  title: string;
  slug: string;
  category_id: number | null;
  main_image: string;
};

export type StoneData = {
  categories: StoneCategory[];
  products: StoneProduct[];
};

export type StoneDataResponse = {
  success: boolean;
  data: StoneData;
};