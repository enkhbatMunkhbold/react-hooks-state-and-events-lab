import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isLight, setIsLight] = useState(false)
  function handleClick() {
    setIsLight(isLight => !isLight)
  }
  const appClass = isLight ? "App dark" : "App light"
  const btnTxt = isLight ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ handleClick }>{ btnTxt }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
