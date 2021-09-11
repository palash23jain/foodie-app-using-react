import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [display, displaygenre] = useState("");
  const dishes = {
    Chinese: [
      { dish: "manchurian", rating: "4" },
      { dish: "noodles", rating: "3" },
      { dish: "chilly paneer", rating: "4" }
    ],
    Rajesthani: [
      { dish: "ker sangri", rating: "4" },
      { dish: "dal bhati", rating: "5" },
      { dish: "dal bafle", rating: "5" }
    ],
    Indori: [
      { dish: "poha jalibi", rating: "5" },
      { dish: "gajak", rating: "5" },
      { dish: "pattice", rating: "5" }
    ]
  };

  function displayFunc() {
    if (display)
      return dishes[display].map((item, key) => {
        return (
          <div key={key}>
            {item.dish} {item.rating}
          </div>
        );
      });
  }
  function displayClickHandler(genre) {
    displaygenre(genre);
  }
  return (
    <div className="App">
      <h1>Foodie</h1>
      <h2>Checkout my favorite dishes. Select a genre to get started</h2>
      <div>
        <button onClick={() => displayClickHandler("Chinese")}>Chinese</button>
        <button onClick={() => displayClickHandler("Rajesthani")}>
          Rajesthani
        </button>
        <button onClick={() => displayClickHandler("Indori")}>Indori</button>
        <hr />
        {displayFunc()}
      </div>
    </div>
  );
}

// {Object.keys(animeDB).map((genre) => (
//   <button className="genre" onClick={() => genreClickHandler(genre)}>
//     {genre}
//   </button>
// ))}
