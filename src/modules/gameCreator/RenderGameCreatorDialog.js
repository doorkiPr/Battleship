import RenderCreatorGameboard from "./RenderCreatorGameboard";
import renderShipTable from "./RenderShipTable";

export default function RenderGameCreatorDialog(Player, Gameboard) {
  const shipsArray = [
    { name: "Carrier", quantity: 1 },
    { name: "Battleship", quantity: 1 },
    { name: "Cruiser", quantity: 1 },
    { name: "Submarine", quantity: 2 },
    { name: "Destroyer", quantity: 3 },
  ];
  // eslint-disable-next-line prefer-const
  let selectedShip = null;

  const dialog = document.querySelector("#gameCreatorDialog");
  dialog.showModal();
  const form = document.querySelector("#gameCreatorForm");

  form.addEventListener("submit", () => {
    const name = document.getElementById("playerName").value;
    const newPlayer = Player(name, Gameboard);
    dialog.innerHTML = "";
    renderShipTable(shipsArray, selectedShip, dialog);
    RenderCreatorGameboard(newPlayer, shipsArray, selectedShip, dialog);
  });
}
