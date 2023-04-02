require('dotenv').config();
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
const {
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType
} = require ("graphql");

var app = express();
var cors = require("cors");

app.use(cors());

//db connect
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

// create Course model
const CourseModel = mongoose.model("course",{
    courseCode: String,
    courseName: String,
    section: String,
    semester: String
});

//define property types in GraphQL 
const CourseType = new GraphQLObjectType({
    name: 'Course',
    description: 'This represents a course',
    fields:() => ({
        id: { type: GraphQLID },
        courseCode: { type: GraphQLNonNull(GraphQLString) },
        courseName: { type: GraphQLNonNull(GraphQLString) },
        section: { type: GraphQLNonNull(GraphQLString) },
        semester: { type: GraphQLNonNull(GraphQLString) },
    })
});

//query
const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        //
      course: {
        type: CourseType,
        description: 'A Single Course',
        args: {
          id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve: async (parent, args) => {
            return CourseModel.findById(args.id).exec();
        }
      },
      //
      courses: {
        type: new GraphQLList(CourseType),
        description: 'List of All Courses',
        resolve: async () => {
           return CourseModel.find().exec();         
        }
      }
    })
  });

  // mutation
  const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
      addCourse: {
        type: CourseType,
        description: 'Add a Course',
        args: {
            courseCode: { type: GraphQLString },
            courseName: { type: GraphQLString },
            section: { type: GraphQLString },
            semester: { type: GraphQLString }     
        },
        resolve: async (parent, args) => {
            var course = new CourseModel(args);
            return course.save();
          }
        }
      })
    })
    
  const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
  });

app.use(express.json())
app.use('/courses', expressGraphQL({
schema: schema,
graphiql: true
}));


app.listen(3001, () => console.log('Server Started at http://localhost:3001/courses'));

