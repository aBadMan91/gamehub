import React, { useEffect } from "react";
import Card from "../../components/Cards";

export default function Home() {
  useEffect(() => {
    document.title = "Gamehub | Home";
  }, []);

  return (
    <div>
      <h1>Welcome to Gamehub</h1>
      <p>Your one-stop destination for all things gaming.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card image="/src/assets/images/game1.jpg" title="Game 1" price="$29.99" />
        <Card image="/src/assets/images/game2.jpg" title="Game 2" price="$39.99" />
        <Card image="/src/assets/images/game3.jpg" title="Game 3" price="$49.99" />
        <Card image="/src/assets/images/game4.jpg" title="Game 4" price="$59.99" />
      </div>
    </div>
  );
}
