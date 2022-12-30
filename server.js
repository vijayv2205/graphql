var express = require('express');
var {graphqlHTTP} = require('express-graphql') 
const { graphql , buildSchema } = require('graphql');

//schema
var schema = buildSchema(`
    type Query {
        hello: String ,
        nameAge(name: String, age: Int): String,
        getArray(max: Int): [Int]
    }
`);

//resolve
var rootValue = {
    hello: () => {
        return "Vijay Verma";
    },
    nameAge: ({name,age}) => {
        return "My name is "+name+" and my age is "+age;
    },
    getArray: ({max}) => {
        var output = [];
        for (var i = 0; i < max; i++) {
            output.push(i+1);
        }
        return output;
    },
};

//run query
/*graphql({
    schema,
    source: '{hello}',
    rootValue
}).then((response)=>{
    console.log(response);
});
*/

var app = express() ;

app.use('/graphql',graphqlHTTP({
    schema: schema ,
    rootValue: rootValue ,
    graphiql : true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');