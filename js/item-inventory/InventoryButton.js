/** @format */

import { ItemInventory } from "./itemInventory.js";

export const inventoryBtn = () => {
  const inventory = ItemInventory();
  inventory.classList.add("hidden");

  const main = document.querySelector("main");
  main.appendChild(inventory);

  const button = document.querySelector("#inventoryBtn");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    inventory.classList.toggle("hidden");
    console.log(
      inventory.classList.contains("hidden")
        ? "Closing inventory"
        : "Opening inventory"
    );
  });
};
