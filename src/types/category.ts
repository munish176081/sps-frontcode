export type CategoryProduct = {
  id: number;
  title: string;
  slug: string;
  main_image: string | null;
};

export type BrochureItem = {
  image: string;
  file: string;
};

export type Brochures = {
  project_book?: BrochureItem;
  range?: BrochureItem;
};

export type CategorySpec = {
  title: string;
  content: string;
};

export type CategoryFaq = {
  question: string;
  answer: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;

  // Hero
  title: string | null;
  subtitle: string | null;
  banner_image: string | null;

  // Content
  overview: string | null;
  gallery: string[];
  specs: CategorySpec[];
  faqs: CategoryFaq[];

  // Collections
  collections_title: string | null;
  collections_description: string | null;

  // Products
  products: CategoryProduct[];

  // brochures
  brochures?: Brochures;
};

export type CategoryResponse = {
  success: boolean;
  data: Category;
};