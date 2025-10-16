import { Link } from "react-router-dom";

export default function ProductCard({ image, title, price }) {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden max-w-sm" style={{ backgroundColor: "var(--color-primary)" }}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-lg font-bold">{price}</span>
      </div>
    </div>
  );
}

{
  /* <div className="p-4">
  <h2 className="text-xl font-semibold mb-2">{title}</h2>
  <p>{price}</p>
</div>; */
}
