const graphql = require('graphql');
const { GraphQLList,GraphQLString,GraphQLInt } = graphql ;

/*const db = require('../model/index'); 
const User = db.users; */

const UserType = require('../TypeDefs/UserType');  
const ResponseType = require('../TypeDefs/ResponseType');  

const USER_ADD = {
    type: UserType ,
    args: {
    	name: {type: GraphQLString} ,
    	email: {type: GraphQLString}
    },
    resolve(parent,args){
        const {db} = parent;
        const User = db.users;
        const user = User.create({ 
        	name: args.name ,
        	email: args.email 
        })
        return user; 
    }//eo resolve
    
}

const USER_UPDATE = {
    //type: UserType ,
    type: ResponseType ,
    args: {
        id: {type: GraphQLInt},
    	name: {type: GraphQLString} ,
    	email: {type: GraphQLString}
    },
    async resolve (parent,args){
        const {db} = parent;
        const User = db.users;
        const user = await User.update({ 
        	name: args.name ,
        	email: args.email 
        },{
            where: {id: args.id}
        });
        return {
            success: true ,
            message: "User Updated Successfully!"
        }; 
    }//eo resolve
    
}


const USER_DELETE = {
    type: ResponseType ,
    args: {
        id: {type: GraphQLInt}
    },
    async resolve (parent,args){
        const {db} = parent;
        const User = db.users;
        const user = await User.destroy({
            where: {id: args.id}
        });
        return {
            success: true ,
            message: "User Deleted Successfully!"
        }; 
    }//eo resolve
    
}

module.exports = { USER_ADD , USER_UPDATE , USER_DELETE} ; 

