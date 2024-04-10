import React, { useState } from "react";

function Item({ name, category }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(isClicked => !isClicked)
  }

  const liClass = isClicked ? "in-cart" : "";
  const btnCart = isClicked ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{btnCart}</button>
    </li>
  );
}

export default Item;
