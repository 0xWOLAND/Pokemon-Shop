import React, { useState, useEffect } from "react";
import "./styles/Pokemon.css";
import { Link } from "react-router-dom";
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
  const route = "/about/" + props.name
  if (item) {
    let background_color = "pokemon_card " + item.types[0].type.name;
    return (
      <Link className="pokemon_link" to={route}>
        <div className={background_color}>
          <h1>{props.name}</h1>
          <img id="image" src={item.sprites.front_default} />
        </div>
      </Link>
    );
  } else {
    return <h1>Fetching Pokemon Info...</h1>;
  }
}

export default Pokemon;
