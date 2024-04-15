export default function computerAI() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  function computerAttack(player, enemy) {
    if (!player.attack(enemy, getRandomNumber(), getRandomNumber())) computerAttack(player, enemy);
  }
  return { computerAttack };
}
