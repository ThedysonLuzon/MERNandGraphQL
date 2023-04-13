const Course = require('../models/Course');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require('graphql');

 // Course Type
 const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLID },
        courseCode: { type: GraphQLString },
        courseName: { type: GraphQLString },
        section: { type: GraphQLString },
        semester: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        course: {
            type: CourseType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Course.findById(args.id);
            }
        },
        courses: {
            type: new GraphQLList(CourseType),
            resolve(parent, args) {
                return Course.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCourse: {
            type: CourseType,
            args: {
                courseCode: { type: new GraphQLNonNull(GraphQLString) },
                courseName: { type: new GraphQLNonNull(GraphQLString) },
                section: { type: new GraphQLNonNull(GraphQLString) },
                semester: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {

                let course = new Course({
                    courseCode: args.courseCode,
                    courseName: args.courseName,
                    section: args.section,
                    semester: args.semester,
                });
                return course.save();
            }
        },
        deleteCourse: {
            type: CourseType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parent, args) {
                return Course.findByIdAndDelete(args.id);
            }
        },
        updateCourse: {
            type: CourseType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                courseCode: { type: new GraphQLNonNull(GraphQLString) },
                courseName: { type: new GraphQLNonNull(GraphQLString) },
                section: { type: new GraphQLNonNull(GraphQLString) },
                semester: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                return Course.findByIdAndUpdate(args.id, {
                    $set: {
                        courseCode: args.courseCode,
                        courseName: args.courseName,
                        section: args.section,
                        semester: args.semester,
                    },
                }, {new: true});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});