const Hapi = require("@hapi/hapi");
const routes = require("./routes");

/**
 * Initializes the server and starts it.
 *
 * @return {Promise<void>} - A promise that resolves when the server has started.
 */
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
