 
export function typeWriter(text, i = 0, callback) {
    const textElement = document.getElementById("storyText");
    textElement.textContent += text[i];

    if ( i === text.length - 1) {
        if (callback){
            callback();
        } 
        return;
    }

    setTimeout(() => typeWriter(text, i + 1, callback), 15 );
}

export function showChoices() {
    const choices = document.getElementById("choiceContainer");
    choices.classList.add("choice-container-visible");
    choices.classList.remove("choice-container");

}