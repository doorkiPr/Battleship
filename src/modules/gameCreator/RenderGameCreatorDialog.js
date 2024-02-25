export default function RenderGameCreatorDialog(Player, Gameboard) {
  const shipsArray = [
    { name: "Carrier", quantity: 1 },
    { name: "Battleship", quantity: 1 },
    { name: "Cruiser", quantity: 1 },
    { name: "Submarine", quantity: 2 },
    { name: "Destroyer", quantity: 3 },
  ];
  let selectedShip;

  const dialog = document.querySelector("#gameCreatorDialog");
  dialog.showModal();
  const form = document.querySelector("#gameCreatorForm");

  form.addEventListener("submit", () => {
    const name = document.getElementById("playerName").value;
    const newPlayer = Player(name, Gameboard);
    dialog.innerHTML = "";
  });
}
