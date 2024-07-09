"use client";

export type Props = {
  title: string;
  addBook: (form: FormData) => Promise<void>;
};

export const BookForm = ({ title, addBook }: Props) => {
  return (
    <form action={addBook}>
      <input type="hidden" name="title" value={title} />
      <button type="submit" className="p-4 border border-slate-700 text-black rounded-md">
        Add to cart
      </button>
    </form>
  );
};
