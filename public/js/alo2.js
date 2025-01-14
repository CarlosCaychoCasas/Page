document.addEventListener("DOMContentLoaded", function() {
    const text = "Estudiante Analista de sistemas";
    let index = 0;
    let isWriting = true;
    const typingElement = document.querySelector('.typing2');

    if (!typingElement) {
        console.error("El elemento con la clase '.typing2' no se encontró.");
        return;
    }

    function typeEffect() {
        if (isWriting) {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
            } else {
                isWriting = false;
            }
        } else {
            if (index > 1) { // Evita que se borre la primera letra
                typingElement.textContent = text.substring(0, index - 1);
                index--;
            } else {
                isWriting = true;
            }
        }

        setTimeout(typeEffect, isWriting ? 50 : 120); // Velocidad de escritura y borrado
    }

    typeEffect(); // Iniciar el efecto
});



