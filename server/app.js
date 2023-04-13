require('dotenv').config();
const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 3001;
const cors = require("cors");


const app = express();


//db connect
connectDB();   

app.use(cors());


app.use(express.json())
app.use('/courses', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(port, () => console.log(`Server Started at http://localhost:${port}/courses `));

