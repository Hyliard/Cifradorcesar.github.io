const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

// Cambia el tema al hacer clic en el botón
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent = "Light Mode";  
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    }
});

function encrypt() {


    
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            let shiftedCode = code + shift;

            if (char >= 'a' && char <= 'z') {
                if (shiftedCode > 122) {
                    shiftedCode -= 26;
                }
            } else if (char >= 'A' && char <= 'Z') {
                if (shiftedCode > 90) {
                    shiftedCode -= 26;
                }
            }

            outputText += String.fromCharCode(shiftedCode);
        } else {
            outputText += char; // No cifrar si no es letra
        }
    }

    document.getElementById("outputText").innerText = outputText;
}
