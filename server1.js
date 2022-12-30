const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4001;
const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema');

const db = require('./model/index'); 

const rootValue = {
    db: db
}

const contextFunction = async req => {
    console.log(req.headers.host);
}


app.use(cors());/////////////////////
app.use('/graphql',
                    /*graphqlHTTP({
                        schema: schema,
                        rootValue: rootValue ,
                        context : ()=> context(req) ,
                        graphiql: true    
                    })*/

                    graphqlHTTP(async req=>({
                        schema: schema,
                        rootValue: rootValue ,
                        context : ()=> contextFunction(req) ,
                        graphiql: true    
                    })),
                    
        );

app.listen(PORT,()=>{
    console.log(`App is listening http://localhost:${PORT}/graphql`);
})