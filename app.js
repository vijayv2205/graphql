'use strict';
const express = require('express');
//const  exph  = require('express-handlebars');
const  {engine}  = require('express-handlebars');

const app = express();
const port = 1001;

//app.engine('handlebars', exph.engine({defaultLayout: 'main'}));
app.engine('handlebars', engine({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render('home',{
        pageName: "Home Page"
    });
});

/*app.get("/api", (req, res) => {
    res.status(200).send([{
        id: 1,
        name: "vijay"
    }]);

    res.status(200).json([{
        id: 1,
        name: "vijay"
    }]);
});*/

app.listen(port, () => {
    console.log(`Listing port ${port}`)
})