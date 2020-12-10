// to create a server
import express from 'express';

const app = express();

/*
app.get takes a callback
whenever '/hello' endpoint receives a get request
the callback has two main arguments
'/hello' = endpoint to listen on
req = request > contains details of request made
res = response >
res.send sends back a response to our request
*/
app.get('/hello', (req, res) => res.send('Hello!'));

// port that server listens on = port 8000
// Use environment variable or port 8000
app.listen(8000, () => console.log('Listening on port 8000'));