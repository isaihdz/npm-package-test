const messages =  [
  "Hello World",
  "Hola Mundo",
  "Bonjour le monde",
  "Hallo Welt",
  "Ciao mondo",
  "Hej världen",
  "Hallo Welt",
  "Mensaje de prueba",
  "Buenos días",
  "Buenas tardes",
  "Buenas noches",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.info(message);
}

module.exports = { randomMsg };