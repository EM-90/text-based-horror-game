/** @format */
import { createElement } from "./jsHelperFunctions/createElement.js";
import { typeWriter } from "./js-animation/typewriter.js";
import { showChoices } from "./js-animation/typewriter.js";

import { chapter_1 } from "./storyData.js";

export function updateText(nodeNumber) {
  const newText = chapter_1[nodeNumber].text;
  const storyTextElement = document.getElementById("storyText");
  storyTextElement.innerText ="";
  typeWriter(newText,0, showChoices);
  updateOptions(chapter_1[nodeNumber].options, newText);
  
  
}

function updateOptions(options) {
  const choiceContainer = document.getElementById("choiceContainer");
  choiceContainer.innerHTML = "";

  options.forEach((option) => {
    const choiceBox = createElement(
      "div",
      "story-choice",
      "",
      option.choice,
      {}
    );
    choiceBox.addEventListener("click", function () {
      showChoices();  
      updateText(option.node);
     
    });
    choiceContainer.appendChild(choiceBox);
  });
}
// i have to change options to, so i will make a function for that

// First i have to make the css for the options, wraped in a button tag
