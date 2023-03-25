const express = require('express')
const app = express();
const login = require('./login');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(login);

console.log("server running")




app.get('/',(req,res,next)=>{
    res.send(`<h1>hello</h1>`)
})

app.use((req,res,next)=>{
    res.status(404).send("<h1>OOPS! 404 the page that you requsted was not found on this server</h1>")
})
app.listen(3000);