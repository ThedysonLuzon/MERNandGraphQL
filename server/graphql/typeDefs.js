const { gql } = require('apollo-server-express');

module.exports = gql`
    type Course {
        id: ID!
        courseCode: String!
        courseName: String!
        section: String!
        semester: String!
    }
    type Query {
        courses: [Course]
        course(id: ID!): Course
    }
    type Mutation {
        addCourse(courseCode: String!, courseName: String!, section: String!, semester: String!): Course
        deleteCourse(id: ID!): Course
        updateCourse(id: ID!, courseCode: String!, courseName: String!, section: String!, semester: String!): Course
    }
`;