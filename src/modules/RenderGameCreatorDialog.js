export default function RenderGameCreatorDialog(Player, Gameboard) {
  const dialog = document.querySelector("#gameCreatorDialog");
  dialog.showModal();
  const form = document.querySelector("#gameCreatorForm");
  form.addEventListener("submit", () => {
    const name = document.getElementById("playerName").value;
    const newPlayer = Player(name, Gameboard);
    dialog.innerHTML = "";
  });
}
