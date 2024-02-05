export default function Gameboard(name) {
  const gameBoardArray = [];
  for (let y = 0; y < 10; y += 1) {
    gameBoardArray.push(new Array(10).fill(null));
  }
  const getName = () => name.toString();
  const getGameboardArray = () => gameBoardArray;

  return {
    getGameboardArray,
    getName,
  };
}
