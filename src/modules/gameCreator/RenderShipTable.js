/* eslint-disable no-param-reassign */
import createHtmlElement from "../../helperFunction/CreateHtmlElement";

export default function renderShipTable(shipsArray, updateSelectedShip, dialog) {
  const shipTable = createHtmlElement("div", { id: "shipTable" });
  shipsArray.forEach((ship) => {
    const newShip = createHtmlElement("div", { id: ship.name, class: "ship" });
    const quantity = createHtmlElement("div", { id: ship.name, class: "shipQuantity" });
    newShip.textContent = ship.name;
    quantity.textContent = ship.quantity;
    newShip.addEventListener("click", () => {
      if (ship.quantity) updateSelectedShip(ship.name);
    });
    shipTable.appendChild(newShip);
    shipTable.appendChild(quantity);
  });
  dialog.appendChild(shipTable);
}
