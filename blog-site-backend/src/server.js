// to create a server
import express from 'express';
// to parse body content because node cannot do that on its own
import bodyParser from 'body-parser';
// to connect to mongodb database
import {
    MongoClient
} from 'mongodb';

// creates an express server
const app = express();

/*
adds a body property to our req argument
for our callbacks
*/
app.use(bodyParser.json());

// function for db setup and operations
const withDB = async (operations, res) => {
    try {

        // connecting to mongodb database using MongoClient
        const client = await MongoClient.connect(
            // DO NOT hard code credentials
            // Use environment variables
            // Also check if they exist
            // Else use localhost
            'mongodb://localhost:27017', { useNewUrlParser: true });

        // connect to specific db
        // Check if environment variable MONGO_DBNAME is set
        // Else use local db
        const db = client.db('blog-site');

        // passing the rest of the db ops via the operations arguement
        await operations(db);

        // closes connection to database
        client.close();
    } catch (error) {
        // 500 = internal server error
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

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

app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        // get name of article
        const articleName = req.params.name;

        // pull data from specific collection
        // and convert to an array
        const articleInfo = await db.collection('articles').findOne({ name: articleName });

        // send response as a json object
        res.status(200).json(articleInfo);
    }, res); // pass the response as an arguement to withDB function to get server errors

});

// post method to handle article upvotes
app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        // get name of article
        const articleName = req.params.name;

        // pull data from specific collection
        // and convert to an array
        const articleInfo = await db.collection('articles').findOne({ name: articleName });

        // increment upvote
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        // get updated upvote
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        // send result to the client
        res.status(200).json(updatedArticleInfo);
    }, res); // pass the response as an arguement to withDB function to get server errors
});

// post method to handle article comments
app.post('/api/articles/:name/add-comment', (req, res) => {
    withDB(async (db) => {
        // get username and text of comment
        const { username, text } = req.body;

        // get name of article
        const articleName = req.params.name;

        // pull data from specific collection
        // and convert to an array
        const articleInfo = await db.collection('articles').findOne({ name: articleName });

        // concat new comment to comments array with username and text
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        // get updated comments
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        // send result to the client
        res.status(200).json(updatedArticleInfo);
    }, res); // pass the response as an arguement to withDB function to get server errors

});

// port that server listens on = port 8000
// Use environment variable or port 8000
app.listen(8000, () => console.log('Listening on port 8000'));