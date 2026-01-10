require("dotenv").config();
const { Admin, sequelize } = require("./models");

async function seedAdmin() {
  try {
    await sequelize.sync();

    await Admin.create({
      name: "Admin",
      email: "admin@example.com",
      password: "admin123",
    });

    console.log("Admin seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
}

seedAdmin();
