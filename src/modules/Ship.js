export default function Ship(name) {
  const allowedNames = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
  if (!allowedNames.includes(name)) throw new Error("Name isn't valid");

  function setShipLength() {
    if (name === "Carrier") return 5;
    if (name === "Battleship") return 4;
    if (name === "Cruiser") return 3;
    if (name === "Submarine") return 3;
    if (name === "Destroyer") return 2;
    return null;
  }
  const length = setShipLength();

  const getName = () => name;
  const getLength = () => length;

  return {
    getName,
    getLength,
  };
}
