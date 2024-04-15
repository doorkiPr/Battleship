export default function Player(name, newGameboard, turn = true, nature = "human") {
  const playerGameboard = newGameboard(name);
  let isTurn = turn;

  const getTurn = () => isTurn;
  const getName = () => name;
  const getNature = () => nature;
  const getGameboard = () => playerGameboard;
  const toggleTurn = () => {
    isTurn = !isTurn;
    return isTurn;
  };

  const attack = (enemyPlayer, y, x) => enemyPlayer.getGameboard().receiveAttack(y, x);
  const hasWon = (enemyPlayer) => enemyPlayer.getGameboard().areAllSunk();
  return {
    getName,
    getNature,
    getGameboard,
    getTurn,
    toggleTurn,
    attack,
    hasWon,
  };
}
