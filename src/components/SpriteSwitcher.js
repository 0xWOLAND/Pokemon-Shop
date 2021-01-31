import React, { useState } from "react";
import "./styles/SpriteSwitcher.css";

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

function SpriteSwitcher(props) {
  const [spriteIterator, setSpriteIterator] = useState(6);
  let ar = [];
  let names = [];
  const sprites = props.item.sprites;

  const left = () => {
    if (spriteIterator >= 2) {
      setSpriteIterator(spriteIterator - 2);
    } else {
      setSpriteIterator(6);
    }
  };
  const right = () => {
    if (spriteIterator <= 5) {
      setSpriteIterator(spriteIterator + 2);
    } else {
      setSpriteIterator(0);
    }
  };
  for (var sprite in sprites) {
    ar.push(sprites[sprite]);
    let new_str = sprite.replace(/_/g, " ");
    names.push(new_str.toProperCase());
  }
  return (
    <div id="sprite_switcher_container">
      <div id="sprite_switcher">
        <span onClick={left} class="pic arrow-left" id="sprite_switcher"></span>
        <img src={ar[spriteIterator]} width={100} />
        <span onClick={right} class="pic arrow-right"></span>
      </div>
      {names[spriteIterator]}
    </div>
  );
}

export default SpriteSwitcher;
