// const express = require('express'); //commonjs
import express from 'express' // esm

const app = express();

app.get("/api/v1/signup", (req,res) => {
    res.send("signup route") //controller function
})

app.get("/api/v1/login", (req,res) => {
    res.send("login route") //controller function
})

app.get("/api/v1/logout", (req,res) => {
    res.send("logout route") //controller function
})


app.listen(5002, () => {
    console.log('Server started at http://localhost:5002')
});