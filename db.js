const Sequelize = require("sequelize");
StudentModel = require("./students");

const sequelize = new Sequelize(
    "uokse",
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
        define: {
            timestamps: false,
        },
    }
);

const Student = StudentModel(sequelize, Sequelize.DataTypes);

module.exports = { Student };