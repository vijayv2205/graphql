const graphql = require('graphql');
const { GraphQLList,GraphQLInt } = graphql ;

/*const db = require('../model/index'); 
const User = db.users; */

const UserType = require('../TypeDefs/UserType');  

const USER_LIST = {
    type: new GraphQLList(UserType),
    resolve(parent,args){
        const {db} = parent;
        const User = db.users;
        let data = User.findAll();
        return data;
    }//eo resolve
}
const USER_DETAIL = {
    type: new GraphQLList(UserType),
    args: { id: {type: GraphQLInt} }, 
    resolve(parent,args){
        const {db} = parent;
        const User = db.users;
        let data = User.findAll({where:{id:args.id}});
        return data;
    }//eo resolve
}
module.exports = { USER_LIST , USER_DETAIL } ;

