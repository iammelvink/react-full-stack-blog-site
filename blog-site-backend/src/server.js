// to create a server
import express from 'express';

// to parse body content because node cannot do that on its own
import bodyParser from 'body-parser';

// fake so called database for article upvotes
const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: []
    },
    'learn-node': {
        upvotes: 0,
        comments: []
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: []
    }
};

// creates an express server
const app = express();

/*
adds a body property to our req argument
for our callbacks
*/
app.use(bodyParser.json());

/*
app.get takes a callback
whenever '/hello' endpoint receives a get request
the callback has two main arguments
'/hello' = endpoint to listen on
req = request > contains details of request made
res = response >
res.send sends back a response to our request
*/
// app.get('/hello', (req, res) => res.send('Hello!'));

// // using a Template String
// // req.params > to get the value of :name
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));

// // using back ticks
// // for a Template String
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

// post method to handle article upvotes
app.post('/api/articles/:name/upvote', (req, res) => {
    // get name of article
    const articleName = req.params.name;

    // upvote the article
    articlesInfo[articleName].upvotes += 1;

    // response
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`);
});

// post method to handle article comments
app.post('/api/articles/:name/add-comment', (req, res) => {
    // get username and text of comment
    const { username, text } = req.body;

    // get name of article
    const articleName = req.params.name;

    // add to comments array
    articlesInfo[articleName].comments.push({ username, text });

    // response
    res.status(200).send(articlesInfo[articleName]);

});

// port that server listens on = port 8000
// Use environment variable or port 8000
app.listen(8000, () => console.log('Listening on port 8000'));