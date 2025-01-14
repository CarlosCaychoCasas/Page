const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 400;

// Configurar middleware
app.use(express.static(path.resolve('assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para manejar el formulario
app.post('/send-email', async (req, res) => {
  const { name, email, number, message } = req.body;
  // Configurar transporte para Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carlos.caycho.casas@vallegrande.edu.pe', // Cambia esto por tu correo
      pass: 'wpuc yzqs opya auwl',       // Cambia esto por tu contraseña o App Password
    },
  });
// Configurar contenido del correo con HTML, estilo de tarjeta y fuente moderna
const mailOptions = {
  from: email,
  to: 'carlos.caycho.casas@vallegrande.edu.pe', // El correo donde recibirás los mensajes
  subject: 'Mensaje enviado desde tu sitio wed "Mi portfolio"',
  html: `
    <html>
      <head>
        <style>
          /* Fuente moderna desde Google Fonts */
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
            background-color: #121212; /* Fondo oscuro elegante */
            margin: 0;
            padding: 0;
            color: #fff;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45vh;
            padding: 20px;
          }
          .card {
            width: 100%;
            max-width: 600px;
            padding: 40px;
            background: linear-gradient(135deg, #1e1e2c, #333); /* Fondo con gradiente suave */
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            font-size: 16px;
            text-align: left;
            transition: all 0.3s ease-in-out;
          }
          .card-header {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #ff6a00; /* Color destacado */
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .card-body {
            line-height: 1.8;
            font-size: 18px;
            color: #e0e0e0;
            margin-bottom: 20px;
          }
          .info {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
          }
          .info p {
            margin: 8px 0; 
            color:white;
          }
          .info strong {
            color: #ff6a00; /* Color para los títulos */
            font-weight: 600;
          }
          .card-footer {
            font-size: 14px;
            color: #b0b0b0;
            margin-top: 20px;
            text-align: center;
          }
          .info a {
            color:rgb(255, 255, 255); /* Color del enlace */
            text-decoration: none;
            font-weight: 100;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="card">
            <div class="card-header" style="text-align:center;">
              Nueva Entrada de Contacto
            </div>
            <div class="card-body">
              <div class="info">
                <p><strong>Nombre:</strong>  ${name}</p>
                <p><strong>Correo:</strong>  ${email}</p>
                <p><strong>Número:</strong>  ${number}</p>
                <p><strong>Mensaje:</strong><br>  ${message}</p>
              </div>
            </div>
            <div class="card-footer">
              <p>Este mensaje fue enviado desde el formulario de contacto en tu sitio web.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `,
  headers: {
    'Content-Type': 'text/html; charset=UTF-8', // Asegúrate de que esté configurado como HTML
  },
};
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve( 'view' , 'index.html'));
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});