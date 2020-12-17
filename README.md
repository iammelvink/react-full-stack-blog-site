# react-full-stack-blog-site

## Repository for my react-full-stack-blog-site project

Find out how to build an blog site platform. Author Melvin Kisten tackles CRUD functions and connects the system to a database of MongoDB (Document database). Created a full-stack platform using JavaScript. The frontend was created using React and the backend was created using NodeJS, Express, MongoDB. Then I used fetch to link my backend with my frontend. I also used Postman to test my end points. 

1. Methodologies/Project Management:

   - Agile

2. Coding Practices:

   - OOP (Object Oriented Programming)

3. Programming Languages/Frameworks:
   - JavaScript
   - React
   - NodeJS
   - Express
   - MongoDB
   - Postman

## Live Demo

- [react-full-stack-blog-site](https://react-full-stack-blog-site.herokuapp.com/ "react-full-stack-blog-site")

## Instructions

1. Make sure you have these installed

   - [NodeJS](https://nodejs.org/en/download/ "NodeJS")
      - I used LTS node version 14.15.1 and npm version 6.14.8 at time of creation
   - [MongoDB](https://www.mongodb.com/try/download/community "MongoDB")
      - I used mongo version 4.4.1 at time of creation
   - [Postman](https://www.postman.com/downloads/ "Postman")
      - I used postman version 7.36.0 at time of creation

2. Clone this repository into your local machine using the terminal (mac) or [Gitbash (PC)](https://git-scm.com/download/win "Gitbash (PC)")

   ```
   > git clone https://github.com/iammelvink/react-full-stack-blog-site.git
   ```

3. blog-site-frontend setup (running on port 3000)
   ```
   > cd blog-site-frontend
   ```

   ```
   > npm install
   ```

   Compiles and hot-reloads for development
   ```
   > npm run start
   ```

4. blog-site-backend setup (running on port 8000)
   ```
   > cd blog-site-backend
   ```

   ```
   > npm install
   ```

5. Insert data into the MongoDB database
   - Start MongoDB server
      ```
      > mongod
      ```

   - Enter mongo shell
      ```
      > mongo
      ```

   - Insert data into the MongoDB database
      ```
      > db.articles.insert([ 
         { name: 'learn-react', upvotes: 0, comments: [], }, 
         { name: 'learn-node', upvotes: 0, comments: [], }, 
         { name: 'my-thoughts-on-resumes', upvotes: 0, comments: [], }, ])
      ```

6. Compiles and hot-reloads for development
   ```
   > npm run start
   ```

7. Enjoy!

## Deploy for production

1. Make sure you have created accounts at

   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register "MongoDB Atlas")
   - [Heroku](https://signup.heroku.com/login "Heroku")

2. Then follow ALL step by step

   ```
   > cd blog-site-frontend
   ```

   Building optimized version of blog-site-frontend

   ```
   > npm run build
   ```

   ```
   copy blog-site-frontend/build to blog-site-backend/src/build
   ```

   ```
   then edit blog-site-backend/src/server.js for live production hosting
   ```

   Needed in production

   ```
   > cd blog-site-backend
   ```

   MongoDB:

   - Create a free cluster

   - Connect and 'Allow Access from Anywhere'

   - Create a Database User

   - Choose a connection method
      - Connect with the mongo shelll
   
   - Choose 'I have the mongo shell installed'

   - Select matching mongo shell version as local version

   - Copy connection string
      - set '\<dbname>\' to preferred database name

   Logging into remote MongoDB server (may need to change the url,
   as well as in blog-site-backend/src/server.js)

   ```
   > mongo "mongodb+srv://template.mongodb.net/<dbname>" --username <username>
   ```

   Inserting data into remote MongoDB database

   ```
   > db.articles.insert([ 
      { name: 'learn-react', upvotes: 0, comments: [], }, 
      { name: 'learn-node', upvotes: 0, comments: [], }, 
      { name: 'my-thoughts-on-resumes', upvotes: 0, comments: [], }, ])
   ```

   Heroku:

   Installing Heroku using npm globally

   ```
   > npm install -g heroku
   ```

   Logging into Heroku

   ```
   > heroku login
   ```

   ```
   > cd blog-site-backend
   ```

   Creating a heroku app

   ```
   > heroku create
   ```

   Setting environment variables
   - MongoDB username and password for database and name of db

   ```
   > heroku config:set MONGO_USER=<username> -a <app name>
   ```

   ```
   > heroku config:set MONGO_PASS='<password>' -a <app name>
   ```

   ```
   > heroku config:set MONGO_DBNAME=<dbname> -a <app name>
   ```

   - Edit MongoDB url in blog-site-backend/src/server.js

   - Add this to blog-site-backend/package.json in "scripts"

   To start the server

   ```
   "start": "npx nodemon --exec npx babel-node src/server.js",
   ```

   Deployment to Heroku

   - Edit blog-site-backend/package.json
   - Add:

   ```
   "engines": {
      "node": "0.0.0",
      "npm": "0.0.0"
   },
   ```

   - In blog-site-backend/package.json
   - Cut all devDependencies

   ```
   "devDependencies": {

    }
   ```
   Paste all devDependencies in dependencies

   ```
   "dependencies": {

    },
   ```

   ```
   > cd blog-site-backend
   ```

   Create .gitignore file
   Add this

   ONLY in entire file

   ```
   # Dependency directories
   node_modules/
   ```

   OR

   ```
   Remove 'dist' and 'build' from .gitignore file
   ```

   ```
   > git init
   ```

   ```
   > heroku git:remote -a <app name>
   ```

   ```
   > git add .
   ```

   ```
   > git commit -am "initial commit"
   ```

   ```
   > git push heroku master
   ```

   ```
   > heroku ps:scale web=1
   ```

## More Stuff

Check out some other stuff on [Melvin K](https://github.com/iammelvink "Melvin K GitHub page").
