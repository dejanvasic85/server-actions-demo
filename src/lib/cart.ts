import { cookies } from "next/headers";

export const getCart = (): string[] => {
  const cartItems = cookies().get("cart");
  if (!cartItems) {
    return [];
  }

  return JSON.parse(cartItems.value);
};

export const updateCart = (items: string[]) => {
  cookies().set("cart", JSON.stringify(items));
};
