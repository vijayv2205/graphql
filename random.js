var express = require('express');
var {buildSchema} = require('graphql');
var {graphqlHTTP} = require('express-graphql');

var app = express();

var schema = buildSchema(`
                type RandomDie{
                    numSides: Int ,
                    rollonce: Int ,
                    again: Int
                }
                type Query{
                    getDie(numSides: Int) : RandomDie
                    Hello: String
                }
              `);

class RandomDie{
    constructor(numSides){
        this.numSides = numSides;
    } 

    rollonce(){
        return 1 + Math.floor(Math.random() * this.numSides);
    }

    again(){
        return this.rollonce();
    }
}

var rootValue = {
    getDie: ({numSides}) => {
        return new RandomDie(numSides || 6) ;
    },
    Hello: () => {
        return "Hello World!!";
    }
}

app.use('/graphql',graphqlHTTP({
    schema: schema ,
    rootValue: rootValue ,
    graphiql : true
}));

app.listen(4000);
console.log('%cRunning a GraphQL API server at localhost:4000/graphql','color: green; background: yellow; font-size: 30px');
