/** @format */
import { createElement } from "./jsHelperFunctions/createElement.js";
import { typeWriter } from "./js-animation/typewriter.js";
import { showChoices } from "./js-animation/typewriter.js";
import { chapter_1 } from "./storyData.js";

export function updateText(nodeNumber) {
  const newText = chapter_1[nodeNumber].text;
  const storyTextElement = document.getElementById("storyText");
  storyTextElement.innerText = "";
  choiceContainer.classList.remove("choice-container-visible");
  choiceContainer.classList.add("choice-container");

  typeWriter(newText, 0, showChoices);
  updateOptions(chapter_1[nodeNumber].options);
}

function updateOptions(options) {
  const choiceContainer = document.getElementById("choiceContainer");
  choiceContainer.innerHTML = ""; // Clear previous options

  options.forEach((option) => {
    const optionElement = document.createElement(option.image ? "img" : "div");
    if (option.image) {
      optionElement.src = option.image.src;
      optionElement.alt = option.image.alt;
      optionElement.classList.add("choice-box"); // Optional styling class
    } else {
      optionElement.textContent = option.choice;
      optionElement.classList.add("story-choice");
    }

    optionElement.addEventListener("click", () => updateText(option.node));
    choiceContainer.appendChild(optionElement);
  });
}

// i have to change options to, so i will make a function for that

// First i have to make the css for the options, wraped in a button tag
