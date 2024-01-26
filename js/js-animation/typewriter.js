 
export function typeWriter(text, i = 0) {
    const textElement = document.getElementById("storyText");
    textElement.textContent += text[i];

    if ( i === text.length - 1) {
        return;
    }

    setTimeout(() => typeWriter(text, i + 1), 50 );
}