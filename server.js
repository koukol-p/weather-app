const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "build");
const port = process.env.PORT || 3000;
app.use(function (req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    res.redirect("http://" + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Running on server ", port);
});
