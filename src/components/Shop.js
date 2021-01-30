import { React, useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import "./styles/Shop.css";
function getNumber(str) {
  let t = 0;
  for (let i = str.length - 2; i >= 0; i--) {
    if (str[i] == "/") {
      t = i;
      break;
    }
  }
  let ans = str.substr(t + 1, str.length - 1);
  ans = ans.substr(0, ans.length - 1);
  let url = "https://pokeapi.co/api/v2/pokemon/" + ans;
  return url;
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
    );
    const items = await data.json();
    setItems(items);
  };
  let results = items.results;
  if (results) {
    return (
      <div id="pokemon_card_container">
        {results.map((item) => (
          <div>
            <Pokemon name={item.name} url={getNumber(item.url)} />
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Fetching Data...</h1>;
  }
}

export default Shop;
