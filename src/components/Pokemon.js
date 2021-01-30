import React, { useState, useEffect } from "react";
import "./styles/Pokemon.css";

function Pokemon(props) {
  const [item, setItem] = useState();

  useEffect(() => {
    fetchitem();
  }, []);
  const fetchitem = async () => {
    const data = await fetch(props.url);
    const items = await data.json();
    setItem(items);

  };
  console.log(item);
  if (item) {
    let background_color = "pokemon_card " + item.types[0].type.name;
    return (
      <div className={background_color}>
        <h1>{props.name}</h1>
        <img id="image" src={item.sprites.front_default} />
      </div>
    );
  } else {
    return <h1>Fetching Pokemon Info...</h1>;
  }
}

export default Pokemon;
