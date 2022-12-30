const graphql = require('graphql');
const {
        GraphQLObjectType,
        GraphQLBoolean,
        GraphQLString,
      } = graphql ;

       
const ResponseType = new GraphQLObjectType({
    name: "Response",
    fields: () => ({
        success: {type: GraphQLBoolean},
        message: {type: GraphQLString},
        error: {type: GraphQLString}
    })
});      

module.exports = ResponseType ;