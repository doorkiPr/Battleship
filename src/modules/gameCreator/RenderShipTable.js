/* eslint-disable no-param-reassign */
import createHtmlElement from "../../helperFunction/CreateHtmlElement";

export default function renderShipTable(shipsArray, updateSelectedShip, wrapper) {
  const shipTable = createHtmlElement("div", { id: "shipTable" });
  shipsArray.forEach((ship) => {
    const shipWrapper = createHtmlElement("div", { id: `${ship.name}wrapper`, class: "shipWrapper" });

    const newShip = createHtmlElement("div", { id: ship.name, class: "ship" });
    newShip.textContent = ship.name;

    const quantity = createHtmlElement("div", { id: ship.name, class: "shipQuantity" });
    quantity.textContent = ship.quantity;

    newShip.addEventListener("click", () => {
      if (ship.quantity) updateSelectedShip(ship.name);
    });

    shipWrapper.appendChild(newShip);
    shipWrapper.appendChild(quantity);

    shipTable.appendChild(shipWrapper);
  });
  wrapper.appendChild(shipTable);
}
