const {Sequelize, Datatypes} = require("sequelize");
const sequelize = require('../utils/pgDbConnect');

const userData = sequelize.define("userData", {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tenantId: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    address: {
        type: Datatypes.STRING,
        allowNull: true
    },
    contact: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    employeeID: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    workEmail: {
        type: Datatypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(()=>{
    console.log("The table 'UserData' has been created successfully");
}).catch((error)=>{
    console.log("Unable to create the table");
})

module.exports = userData;