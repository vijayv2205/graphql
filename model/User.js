module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define('users',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
    },{
        createdAt: 'created_at',
        updatedAt : 'updated_at'
    });
    return Users ; 
}