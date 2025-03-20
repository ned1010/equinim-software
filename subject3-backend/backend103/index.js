import express from 'express';

//instance of express 
const app = express();

//port number
const port = 3000;

//middlware 
app.use(express.json()) //parse the request in json format

//response to a get request from a client (browser or postman)
app.get('/', function(req, res) {
    res.send("yes your server is working")
})


app.get('/something/123', function(req, res) {
    res.send("Hey, I have sent you something")
})




//POST request handler
app.post('/', function(req, res){
    console.log(req.body)
    res.send(req.body)
})

app.post('/something', function(req, res){
    console.log(req.body)
    res.send(req.body)
});

//setup delete request handler
//parameter
app.delete('/:id', function(req, res){
    console.log(req.params.id)
})
//listening
app.listen(port, function(){
    console.log(`Listening to port ${port}`)
})