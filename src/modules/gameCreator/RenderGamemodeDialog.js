import Gameboard from "../Gameboard";
import Player from "../Player";
import RenderGameCreatorDialog from "./RenderGameCreatorDialog";

export default function RenderGamemodeDialog() {
  const dialog = document.querySelector("#gamemodeDialog");
  dialog.showModal();

  const humanButton = document.querySelector("#humanButton");
  const aiButton = document.querySelector("#aiButton");

  humanButton.addEventListener("click", () => {
    // dialog.close();
    // RenderGameCreatorDialog(Player, Gameboard, false);
  });

  aiButton.addEventListener("click", () => {
    dialog.close();
    RenderGameCreatorDialog(Player, Gameboard, true);
  });
}
