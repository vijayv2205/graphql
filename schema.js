const graphql = require('graphql');
const {
        GraphQLObjectType,
        GraphQLSchema,
        GraphQLInt,
        GraphQLString,
        GraphQLList
      } = graphql ;

const UserType = require('./TypeDefs/UserType');      
const {USER_LIST,USER_DETAIL} = require('./Query/User');   
const {USER_ADD,USER_UPDATE,USER_DELETE} =  require('./Mutation/User');   

const RootQuery = new GraphQLObjectType({
    name: "xyz",
    fields: {
        getUsers: USER_LIST,
        getUser: USER_DETAIL,
    }//eo fields
});

const Mutation = new GraphQLObjectType({
    name: "mutation",
    fields: {
        addUser: USER_ADD ,
        updateUser: USER_UPDATE , 
        deleteUser: USER_DELETE
    }//eo fields
});

module.exports = new GraphQLSchema({
    query: RootQuery ,
    mutation: Mutation
});