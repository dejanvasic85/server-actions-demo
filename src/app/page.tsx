import { getAllBooks, BookType } from "@/lib/bookDb";
import { Book } from "@/components/Book";
import { Cart } from "@/components/Cart";
import { BookForm } from "@/components/BookForm";
import { addToCart } from "@/actions/addToCart";
import { getCart } from "@/lib/cart";

export default async function Home() {
  // Fetch books from database
  const books = await getAllBooks();

  // Fetch cart items
  const cart = getCart();
  const cartItems = books.filter((b) => cart.includes(b.title));

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 className="text-2xl">The book store</h1>
      <div className="flex gap-8">
        <section>
          <Cart items={cartItems} />
        </section>
        <section className="flex flex-grow">
          {books.map((book) => (
            <div key={book.title} className="flex flex-col">
              <Book {...book} />
              <BookForm title={book.title} addBook={addToCart} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
