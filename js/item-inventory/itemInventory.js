/** @format */

import { createElement } from "../jsHelperFunctions/createElement.js";

export const ItemInventory = () => {
  const inventory = createElement(
    "article",
    "inventory-container",
    "inventoryContainer"
  );
  const itemInfo = createElement("ul", "item-list");

  //items.forEach((itemData) => {
  const item = createElement(
    "li",
    "item",
    "itemId",
    "This is the first item",
    {}
  );
  //item.addEventListener(click, () => {
  //console.log(itemData.name);
  //});
  itemInfo.appendChild(item);
  //});

  inventory.appendChild(itemInfo);
  return inventory;
};

/*<table>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Health Potion</td>
        <td>10</td>
        <td>Consumable</td>
        <td>Restores 50 HP</td>
      </tr>
      <tr>
        <td>Iron Sword</td>
        <td>1</td>
        <td>Weapon</td>
        <td>Basic melee weapon</td>
      </tr>
      <tr>
        <td>Wooden Shield</td>
        <td>1</td>
        <td>Armor</td>
        <td>Provides basic protection</td>
      </tr>
    </tbody>
  </table>*/
