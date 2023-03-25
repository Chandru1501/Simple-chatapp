const express = require('express');

const router = express.Router();

const fs = require('fs');

var previousmessage = null;
var previoususer = null;



router.get('/login',(req,res,next)=>{
  res.send(`<html><head><title>Login</title></head><body><h1>User name</h1><form action="/chat" method="POST">

	<input id="username" type="text" name"title">

	<button type="submit" id="btn">login</button>

</form>
<script>let username= document.querySelector("#username") 
  let btn = document.querySelector("#btn")  
  btn.addEventListener("click",()=>{
     localStorage.setItem("username", username.value )
     })
     </script></body>
     </html>`) 
 })



 
router.post("/chat",(req,res,next)=>{
  if(req.body.username!=undefined){
    previoususer = req.body.username;
    fs.appendFileSync("message.txt",req.body.username+" : ")
     }
    if(req.body.message!=undefined && req.body.message!=previousmessage){
      previousmessage=req.body.message;
       fs.appendFileSync("message.txt",req.body.message+" ")
    }
  res.send(`<html><head><title>chat</title>
  <style>
  #username{
    visibility: hidden;
  }
  </style>
  </head>
  <body>
  <form action="/chat" method="POST">
  <h2>${fs.readFileSync("message.txt")}</h2>
  <input type="text" name="message" id="message">
  <input type="text" name="username" id="username"><br>
  <button type="submit" id="btn" >send</button>
  <script>
  var messages = document.querySelector('h2');
  var message = document.querySelector("#message") 
  var username = document.querySelector('#username')
  let btn = document.querySelector("#btn")
  username.value = localStorage.getItem('username')
  </script>
  </body>
  </html>`)  
})

module.exports = router;

