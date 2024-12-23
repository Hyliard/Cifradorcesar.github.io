const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const copyButton = document.getElementById("copy");

// Cambia el tema al hacer clic en el botón
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.split("/").pop() === "moon.svg") {
    toggleIcon.src = "assets/icons/sun.svg";
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

      if (char >= "a" && char <= "z") {
        if (shiftedCode > 122) {
          shiftedCode -= 26;
        }
      } else if (char >= "A" && char <= "Z") {
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

// Copiar código cifrado al portapapeles
copyButton.addEventListener("click", function () {
  const cipherTextInput = document.getElementById("outputText"); // Selecciona el p con el texto cifrado

  // Crea un textarea temporal para copiar el texto
  const textArea = document.createElement("textarea");
  textArea.value = cipherTextInput.innerText; // Copia el texto del p
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999); // Esto es necesario para dispositivos móviles

  // Usamos la API moderna Clipboard para copiar al portapapeles
  navigator.clipboard
    .writeText(textArea.value)
    .then(() => {
      alert("Texto cifrado copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles: ", err);
    });

  // Elimina el textarea temporal
  document.body.removeChild(textArea);
});
