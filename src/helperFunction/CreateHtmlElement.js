export default function createHtmlElement(tagName, attributesArray) {
  const element = document.createElement(tagName);

  if (attributesArray) {
    const attributeArray = Object.keys(attributesArray);
    attributeArray.forEach((data) => {
      element.setAttribute(data, attributesArray[data]);
    });
  }

  return element;
}
