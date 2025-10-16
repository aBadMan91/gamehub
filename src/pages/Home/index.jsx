import React, { useEffect } from "react";
import ProductSection from "../../components/ProductSection";

export default function Home() {
  useEffect(() => {
    document.title = "Gamehub | Home";
  }, []);

  return (
    <main>
      <section>
        <h1>Highlighted Game</h1>
        <ProductSection title="Featured" query="featured=true&per_page=1" />
      </section>

      <section>
        <ProductSection title="New Releases" query="orderby=date&order=desc&per_page=4" />
      </section>

      <section>
        <ProductSection title="Popular Games" query="orderby=popularity&per_page=4" />
      </section>
    </main>
  );
}
