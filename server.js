const http = require('http')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 9000
var pokemons=require('./public/experiences.json')

const app = express()
const server = http.createServer(app)

/*app.use(express.static(path.join(__dirname, 'public')))*/
app.use(express.static('public'))

app.get('/experiences',function(req,res){
	console.log(pokemons);
	res.send(pokemons)
})

server.listen(port, () => console.log(`Listening on port ${port}`))
