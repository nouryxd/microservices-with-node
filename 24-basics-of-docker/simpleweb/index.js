const express = require("express");

const app = express();

app.get("/", (res, req) => {
  res.send("hi there");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
