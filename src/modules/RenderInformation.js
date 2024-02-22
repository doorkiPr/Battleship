export default function renderInformation(type, playerOne, playerTwo) {
  const mainInformation = document.querySelector(".main");
  const descInformation = document.querySelector(".description");

  if (type === "turn") mainInformation.textContent = `It is ${playerOne.getName()}'s Turn`;
  if (type === "win") {
    mainInformation.textContent = `${playerOne.getName()} lost all their ships!`;
    descInformation.textContent = `${playerTwo.getName()} Has Won!`;
  }
}
