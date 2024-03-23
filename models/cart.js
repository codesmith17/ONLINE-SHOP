const Sequelize = require("sequelize");
const path = require("path");
const sequelize = require(path.join(__dirname, "..", "utils", "database.js"));
const Cart = sequelize.define("cart", {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

})
module.exports = { Cart }