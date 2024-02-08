export default function Player(name, newGameboard) {
  const playerGameboard = newGameboard(name);

  const getName = () => name;
  const getGameboard = () => playerGameboard;
  const attack = (enemyPlayer, y, x) => enemyPlayer.getGameboard().receiveAttack(y, x);
  const hasWon = (enemyPlayer) => enemyPlayer.getGameboard().areAllSunk();
  return {
    getName,
    getGameboard,
    attack,
    hasWon,
  };
}
