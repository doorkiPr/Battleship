import createHtmlElement from "./CreateHtmlElement";

export default function GenerateIcon() {
  const destroyed = createHtmlElement("span", { class: "material-symbols-outlined" });
  destroyed.textContent = "skull";

  const fire = createHtmlElement("span", { class: "material-symbols-outlined" });
  fire.textContent = "local_fire_department";

  const missed = createHtmlElement("span", { class: "material-symbols-outlined" });
  missed.textContent = "close";
  return { destroyed, fire, missed };
}
