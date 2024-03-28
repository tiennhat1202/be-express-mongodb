const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const connectDatabase = require("./configs/database.js");
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const reviewRoute = require("./routes/review.route.js");
const errorHandlerMiddleware = require("./middleware/errorMiddleware.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Config environment variables
require("dotenv").config({ path: "./configs/config.env" });

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Uncaught Exception");
  process.exit(1);
});

// Connect to database
connectDatabase();

app.get("/", (req, res) => {
  res.send("API");
});
//routes
app.use("/api/v1/", productRoute);
app.use("/api/v1/", userRoute);
app.use("/api/v1/", reviewRoute);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server working with port: ${process.env.PORT}`)
);

//Middleware
app.use(errorHandlerMiddleware);
// Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
