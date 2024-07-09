import { cookies } from "next/headers";
import { getCart, updateCart } from "@/lib/cart";

export async function addToCart(form: FormData) {
  "use server";

  const cart = getCart();
  const title = form.get("title") as string;
  cart.push(title);
  updateCart(cart);
}
