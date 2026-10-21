export type Size = "S" | "M" | "L" | "XL" | "XXL";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  stock: Partial<Record<Size, number>>; // e.g. { S: 2, M: 0, L: 5 }
};

export type CartItem = {
  productId: string;
  size: Size;
  quantity: number;
};
