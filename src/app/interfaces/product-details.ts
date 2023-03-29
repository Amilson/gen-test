export interface ProductDetailsAddToCart {
  size: number;
  id: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  description: { title: string; text: string };
  sizes: { value: number; available: boolean }[];
  color: string;
  price: number;
  ratting: number;
  _links: { prev: string; next: string };
}
