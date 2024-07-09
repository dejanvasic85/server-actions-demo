import books from "@/data/book.json";

export type BookType = {
  title: string;
  price: number;
  img: string;
  author: string;
  pages: number;
};

export const getAllBooks = (): Promise<BookType[]> => {
  return Promise.resolve(books);
};
