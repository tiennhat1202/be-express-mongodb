const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTIONSTRING)
    .then((data) =>
      console.log(`Connect to MongoDB with server: ${data.connection.host}`)
    );
};

module.exports = connectDatabase;
