const http = require('http')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
var experiences = require('./public/experiences.json')
var intereses = require('./public/intereses.json')

const app = express()
const server = http.createServer(app)

/*app.use(express.static(path.join(__dirname, 'public')))*/
app.use(express.static('public'))
app.use(express.static('bower_components'))

app.get('/experiences',function(req,res){
	res.send(experiences)
})

app.get('/intereses_data',function(req,res){
	res.send(intereses)
})

server.listen(port, () => console.log(`Listening on port ${port}`))
