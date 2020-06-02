//Get the express library
const express = require('express')
//This lets us use __dirname to get the project directory
const path = require('path');

//Specify a port for node to be served on
const port = 3333
//Create the Express App object
const app = express()

//Expose all our assets folder to the internet 
app.use('/assets', express.static('assets'))

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/pages/home.html'))
	console.log('The home.html page was serverd')
})

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname+'/pages/about.html'))
	console.log('The about.html page was serverd')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))