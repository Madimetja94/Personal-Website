const express = require("express");
const bodyParser = require("body-parser");
const { jsonEndpoints } = require("./src/json_endpoints");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

jsonEndpoints(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
