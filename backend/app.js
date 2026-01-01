require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoute = require("./routes/auth.route");
// const sequelize = require("sequelize");

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoute);

PORT = process.env.PORT || 8080;

db.sequelize
  // .sync({ force: true })
  .sync()
  // .then(() => sessionStore.sync())
  .then(() => {
    console.log("Database Synced");
    app.listen(PORT, () => {
      console.log("Server running on http://localhost:", PORT);
    });
  })
  .catch((err) => console.log(err));
