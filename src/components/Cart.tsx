"use client";

import { BookType } from "@/lib/bookDb";

type Props = {
  items: BookType[];
};

export const Cart = ({ items }: Props) => {
  return (
    <div className="p-4 flex flex-col gap-2 border rounded w-64">
      My cart:
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-none">
            <li>
              {items.map((item) => (
                <div key={item.title} className="flex justify-between">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </li>
          </ul>
          <div className="font-bold border-t">Total: ${items.reduce((acc, item) => acc + item.price, 0)}</div>
        </>
      )}
    </div>
  );
};
