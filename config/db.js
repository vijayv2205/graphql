const Sequelize = require('sequelize');

const sequelize = new Sequelize('test','root','',{
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});

sequelize.authenticate()
.then(()=>{
    console.log('Database connected');
})
.catch((e)=>{
    console.log('Error'+e);
});

module.exports = sequelize ;