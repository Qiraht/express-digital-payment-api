const app = require("./app");
const config = require("./config");

const host = config.server.host;
const port = config.server.port;

app.listen(port, host, () => {
  console.log(`Server Running on http://${host}:${port}`);
});

