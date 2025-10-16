import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../Cards";

export default function ProductSection({ title, query }) {
  const base = "/api/wp-json/wc/store/products";
  const url = query ? `${base}?${query}` : base;
  const { data = [], isLoading, isError } = useFetch(url);

  const id = title ? title.replace(/\s+/g, "-").toLowerCase() : "products";

  return (
    <section className="mb-8" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold mb-4">
        {title}
      </h2>

      {isLoading && <p>Loading {title}...</p>}
      {isError && <p>Failed to load {title}.</p>}

      {!isLoading && !isError && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(data || []).map((game) => (
            <ProductCard key={game.id} image={game.images?.[0]?.src} title={game.name} price={game.price ? `${game.price}` : ""} />
          ))}
        </div>
      )}
    </section>
  );
}
