const form = document.getElementById('Contacto');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById('response').textContent = result.message;

    // Limpiar los campos del formulario
    form.reset(); // Resetea todos los campos del formulario
  } catch (error) {
    document.getElementById('response').textContent = 'Error al enviar el formulario';
    console.error('Error:', error);
  }
});
