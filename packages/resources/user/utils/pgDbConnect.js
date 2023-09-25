const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'doracash',
 process.env.DATABASE_USERNAME,
 process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
  }
);

sequelize.authenticate().then(()=>{
    console.log('The connection has been established successfully..');
}).catch((error)=>{
    console.log('unable to connect to the database', error);
})

module.exports = sequelize;