require('dotenv').config();
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const connectDB = require('./config/db');
const schema = require('./graphql/resolvers/index');
var app = express();
var cors = require("cors");

app.use(cors());

//db connect
connectDB();    

app.use(express.json())
app.use('/courses', expressGraphQL({
schema: schema,
graphiql: true
}));


app.listen(3001, () => console.log('Server Started at http://localhost:3001/courses'));

