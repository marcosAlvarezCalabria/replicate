
const Replicate = require('replicate');
require('dotenv').config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const input = {
  prompt: "quiero recetas de comida china "//aqui ponemos lo que queramos preguntar
};

async function run() {
  try {
    for await (const event of replicate.stream("meta/meta-llama-3-70b-instruct", { input })) {
      process.stdout.write(event.toString()); // Imprime los resultados en la salida estándar
    }
  } catch (error) {
    console.error('Error al obtener la respuesta del modelo:', error);
  }
}

run();
