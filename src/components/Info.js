import React, { useEffect, useState } from "react";
import "./styles/Info.css"
function Info(props) {
  const [item, setItem] = useState();
  const url = " https://pokeapi.co/api/v2/pokemon/" + props.match.params.id;
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const data = await fetch(url);
    const items = await data.json();
    setItem(items);
    console.log(items);
  };

  if (item != null) {
    return (
      <div id="pokemon_info">
        <img src={item.sprites.front_shiny} width={100} />
        <h1>{item.name}</h1>
      </div>
    );
  }
  else return <div></div>
}

export default Info;
