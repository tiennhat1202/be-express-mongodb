const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API");
});

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin@backend-db-app.8ftyvxy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend-db-app"
  )
  .then(
    () => console.log("Connected!"),
    app.listen(3000, () => console.log("Run app port 3000"))
  )
  .catch(() => console.log("Failed!"));
