const sequelize = require('../config/db');
const {Sequelize,DataTypes} = require('sequelize');

const db = {} ;

db.Sequelize = Sequelize ;
db.sequelize = sequelize ;

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('Resynced database');
});

db.users = require('./User')(sequelize,DataTypes);

module.exports = db ;