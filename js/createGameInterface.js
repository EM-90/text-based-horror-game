/** @format */
import { createElement } from "./jsHelperFunctions/createElement.js";
import { updateText } from "./nodeOptions.js";

export function createGameInterface() {
  const main = document.querySelector("main");

  main.innerHTML = "";

  const container = createElement("div", "container", "", "", {});
  const chapterTitle = createElement(
    "h1",
    "chapter-title",
    "",
    "The Albrecht Manor",
    {}
  );
  container.appendChild(chapterTitle);

  const storyText = createElement("p", "story-text", "storyText", "", {});
  container.appendChild(storyText);

  const choiceContainer = createElement(
    "div",
    "choice-container",
    "choiceContainer",
    "",
    {}
  );
  container.appendChild(choiceContainer);

  main.appendChild(container);

  updateText(1);
}
