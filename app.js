/**
 * A basic Nodejs express application 
 * demostrating the use of Redis in memory database
 */
const express = require('express');  
const app = express();  
const port = 3000;
var redis = require("redis");
var client = redis.createClient();

//Push to queue and send queue size as response
app.get('/push/:item', (request, response) => {  
	client.LPUSH("items_queue", request.params.item , function(err,reply){
		if(!err)
			response.send(reply.toString());
		else{
			console.log(err);
		}
	});
});

//Pop from queue and send output as response
app.get('/pop', (request, response) => {  
	client.RPOP("items_queue" , function(err,reply){
		if(!err)
		{
		   var replyString=(reply===null)?"queue is empty now":reply.toString();
	           response.send(replyString);		

		}
		else{
			response.send("error occured at server");
			console.log(err);
		}
	});
});

app.listen(port, (err) => {  
	if (err) {
		return console.log('something bad happened', err);
	}
	console.log(`server is listening on ${port}`)
});
