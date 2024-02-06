export default function Gameboard(name) {
  const gameBoardArray = [];
  for (let y = 0; y < 10; y += 1) {
    gameBoardArray.push(new Array(10).fill(null));
  }
  const getName = () => name.toString();
  const getGameboardArray = () => gameBoardArray;
  function placeShip(ship, y, x) {
    if (gameBoardArray[y][x]) return;
    if (gameBoardArray[y][x + ship.getLength() - 1] !== null) return; // if ship spans across a cell that is out of limits or contains another ship don't place it
    for (let i = 0; i < ship.getLength(); i += 1) {
      gameBoardArray[y].splice(x + i, 1, ship); // spans ship across the gameboard cells depedning on it's length
    }
  }
  return {
    getGameboardArray,
    getName,
    placeShip,
  };
}
