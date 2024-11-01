const express = require("express");
const bodyParser = require("body-parser");
const { jsonEndpoints } = require("./src/json_endpoints");
const {createTable} = require("./src/controller");
const path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
jsonEndpoints(app);

app.listen(port, () => {
  createTable();
  console.log(`app listening at http://localhost:${port}`);
});
