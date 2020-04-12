const express = require("express");
const compression = require("compression");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());

require("./routes/html-routes.js")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
