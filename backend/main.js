var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const Author = require('./models/author')

var app = express()
app.use(bodyParser.json())

app.post('/author', (request, response) =>{
    var authorData = request.body
    var author = new Author(authorData)
    author.save((error, result)=>{
        if(error){
            console.log(error)
            return response.sendStatus(500).send({message:error})
        }
        return response.sendStatus(201)
    })
})

app.get("/author", async (request, response)=>{
    var authors = await Author.find({},"-__v");
    response.send(authors)
})

mongoose.connect('mongodb+srv://emrea:24121994@cluster0.omknufb.mongodb.net/?retryWrites=true&w=majority', (error)=>{
    if(!error){
        console.log("Connedted to db")
    }
})

app.listen(5050)