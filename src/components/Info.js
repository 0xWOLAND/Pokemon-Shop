import React, { useEffect, useState } from "react";
import "./styles/Info.css";
import SpriteSwitcher from "./SpriteSwitcher";
import { Link } from "react-router-dom";
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
        <div className="basic_info">
          <SpriteSwitcher item={item} />
          <h1>{item.name}</h1>
          <h3>Base Experience: {item.base_experience}</h3>
        </div>
        <div id="stats_container">
          <div className="container">
            <h2>Abilities</h2>
            <ul>
              {item.abilities.map((e) => (
                <li>{e.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="container">
            <h2>Stats</h2>
            <ul>
              {item.stats.map((stat) => (
                <li>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="container">
            <h2>Types</h2>
            <ul>
              {item.types.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <h1 id="moves_title">Moves</h1>
          <div id="moves_container">
            <div id="moves">
              <div class="scrolling-wrapper">
                {item.moves.map((move) => (
                  <div class="card">
                    <div id="name_container">
                      <h2>{move.move.name}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
}

export default Info;
