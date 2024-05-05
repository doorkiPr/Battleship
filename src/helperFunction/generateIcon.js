import createHtmlElement from "./CreateHtmlElement";

export default function GenerateIcon() {
  const destruction = createHtmlElement("span", { class: "material-symbols-outlined" });
  destruction.textContent = "destruction";

  const fire = createHtmlElement("span", { class: "material-symbols-outlined" });
  fire.textContent = "local_fire_department";

  const missed = createHtmlElement("span", { class: "material-symbols-outlined" });
  missed.textContent = "close";
  return { destruction, fire, missed };
}
