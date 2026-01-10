require("dotenv").config();
const { Admin, sequelize } = require("./models");

async function seedAdmin() {
  try {
    await sequelize.sync();

    await Admin.create({
      name: "Admin",
      email: process.env.ADMIN_MAIL,
      password: process.env.ADMIN_PASS,
    });

    console.log("Admin seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
}

seedAdmin();
