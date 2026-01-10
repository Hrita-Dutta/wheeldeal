require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoute = require("./routes/auth.route");
const adminRoute = require("./routes/admin.route");
// const sequelize = require("sequelize");

const app = express();

app.use(cors());
app.use(express.json());

// All routes here
app.use("/auth", authRoute);
app.use("/admin", adminRoute);

// Error route
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong";

  res.status(status).json({
    message: message,
  });
});

PORT = process.env.PORT || 8080;
db.sequelize
  // .sync({ force: true })
  .sync({ alter: true })
  // .then(() => sessionStore.sync())
  .then(() => {
    console.log("Database Synced");
    app.listen(PORT, () => {
      console.log("Server running on http://localhost:", PORT);
    });
  })
  .catch((err) => console.log(err));
