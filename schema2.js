const graphql = require('graphql');
const {
        GraphQLObjectType,
        GraphQLSchema,
        GraphQLInt,
        GraphQLString,
        GraphQLList
      } = graphql ;

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString}
    })
});      


const db = require('./model/index'); 
const User = db.users; 

const RootQuery = new GraphQLObjectType({
    name: "xyz",
    fields: {
        getUsers: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                /*let data = [
                    { id: 1,name: "vijay",email: "vijay@gmail.com" },
                    { id: 2,name: "akash",email: "akash@gmail.com" },
                    { id: 3,name: "kamal",email: "kamal@gmail.com" }
                ];*/

                let data = User.findAll();
                return data;
            }//eo resolve
        },//eo getUsers
        hello: {
            type: GraphQLString,
            resolve(parent,args){
                return "Hello World!!!"
            }
        }
    }//eo fields
});


module.exports = new GraphQLSchema({
    query: RootQuery
});