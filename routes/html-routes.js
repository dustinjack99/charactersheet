const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });

  app.get("/index_bundle.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index_bundle.js"));
  });
};
