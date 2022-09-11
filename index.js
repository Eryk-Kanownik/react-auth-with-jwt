const express = require('express');

const app = express();

const credentials = {
    username: "Eryk123XD",
    email: "eryk.kanownik@gmail.com",
    password: "eryktoja"
}

app.get('/',(req,res) => {
    res.json({message:"Hello"})
})

app.post('/login',(req,res) => {
    
})

app.listen(2000,() => "http://localhost:2000")