type Props = {
  title: string;
  price: number;
  img: string;
};

export const Book = ({ title, price, img }: Props) => {
  return (
    <div className="p-4 flex flex-col">
      <img src={img} alt={title} className="w-48 h-48" />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
};
