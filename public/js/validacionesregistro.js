document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    // Validación del correo electrónico
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si el correo es de Gmail, omitir la verificación externa
    const isGmail = correo.endsWith('@gmail.com');
    if (isGmail) {
        // Validar la contraseña y enviar el formulario
        if (password.length < 5) {
            alert("La contraseña debe tener al menos 5 caracteres.");
            return;
        }

        const passwordRegex = /^(?=.*[a-zA-Z0-9]).{5,}$/;
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe contener al menos un número o una letra.");
            return;
        }

        // Si todo es válido, enviar el formulario
        event.target.submit();
        return;
    }

    // Mostrar mensaje de carga mientras se verifica el correo
    const loadingMessage = document.createElement("div");
    loadingMessage.textContent = "Verificando correo...";
    document.body.appendChild(loadingMessage);

    // Verificación de que el correo realmente existe
    fetch(`https://api.trumail.io/v1/lookups/json?email=${correo}`)
        .then(response => response.json())
        .then(data => {
            // Remover mensaje de carga
            document.body.removeChild(loadingMessage);

            // Verificar formato y existencia del correo
            if (!data.validFormat || !data.deliverable) {
                alert("El correo electrónico no es válido o no existe.");
                return;
            }

            // Validación de la contraseña
            if (password.length < 5) {
                alert("La contraseña debe tener al menos 5 caracteres.");
                return;
            }

            const passwordRegex = /^(?=.*[a-zA-Z0-9]).{5,}$/;
            if (!passwordRegex.test(password)) {
                alert("La contraseña debe contener al menos un número o una letra.");
                return;
            }

            // Si todo es válido, enviar el formulario
            event.target.submit();
        })
        .catch(error => {
            // Remover mensaje de carga en caso de error
            document.body.removeChild(loadingMessage);
            alert("Hubo un problema al verificar el correo. Intenta nuevamente.");
        });
});
