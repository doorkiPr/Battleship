import getComputerPlayer from "../ComputerPlayer";
import RenderCreatorGameboard from "./RenderCreatorGameboard";
// eslint-disable-next-line no-unused-vars
import gameCreatorStyle from "../../styles/gameCreatorDialog.css";

export default function RenderGameCreatorDialog(Player, Gameboard, isVersusAi) {
  const shipsArray = [
    { name: "Carrier", quantity: 1 },
    { name: "Battleship", quantity: 1 },
    { name: "Cruiser", quantity: 1 },
    { name: "Submarine", quantity: 2 },
    { name: "Destroyer", quantity: 3 },
  ];
  // eslint-disable-next-line prefer-const
  let selectedShip = null;
  function updateSelectedShip(newValue) {
    selectedShip = newValue;
  }
  function getSelectedShip() {
    return selectedShip;
  }
  const dialog = document.querySelector("#gameCreatorDialog");
  dialog.showModal();
  const form = document.querySelector("#gameCreatorForm");

  form.addEventListener("submit", () => {
    const name = document.getElementById("playerName").value;
    const newPlayer = Player(name, Gameboard);
    if (isVersusAi) {
      const computer = getComputerPlayer(shipsArray);
      dialog.innerHTML = "";
      RenderCreatorGameboard(newPlayer, computer, shipsArray, getSelectedShip, dialog, updateSelectedShip);
    }
  });
}
