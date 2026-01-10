const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Admin = require("./admin.model")(sequelize, Sequelize.DataTypes);
db.Customer = require("./customer.model")(sequelize, Sequelize.DataTypes);
db.VehicleOwner = require("./vehicleOwner.model")(
  sequelize,
  Sequelize.DataTypes
);

module.exports = db;
