export default function Player(name, newGameboard, turn = true) {
  const playerGameboard = newGameboard(name);
  const isTurn = turn;

  const getTurn = () => isTurn;
  const getName = () => name;
  const getGameboard = () => playerGameboard;
  const toggleTurn = () => !isTurn;

  const attack = (enemyPlayer, y, x) => enemyPlayer.getGameboard().receiveAttack(y, x);
  const hasWon = (enemyPlayer) => enemyPlayer.getGameboard().areAllSunk();
  return {
    getName,
    getGameboard,
    getTurn,
    toggleTurn,
    attack,
    hasWon,
  };
}
