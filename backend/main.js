var express = require('express')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb+srv://emrea:24121994@cluster0.omknufb.mongodb.net/?retryWrites=true&w=majority', (error)=>{
    if(!error){
        console.log("Connedted to db")
    }
})

app.listen(5050)