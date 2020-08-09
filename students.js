const Sequelize = require("sequelize");

module.exports = (sequelize, type) => {
    return sequelize.define("students", {
        name: {
            type: type.STRING,
        },
        studentNo: {
            type: type.STRING,
        },
        company: {
            type: type.STRING,
        },
    });
};