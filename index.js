var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
const port = 3000;
const Mercury = require("@postlight/mercury-parser");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/get_content", async (req, res) => {
  console.log("Query received !");
  let url = req.query.url;
  let result = await Mercury.parse(url, { contentType: "markdown" });
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
