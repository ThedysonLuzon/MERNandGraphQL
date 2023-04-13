const coursesResolver = require('./courses');

module.exports = { 
    Query: {
        ...coursesResolver.Query
    },
    Mutation: {
        ...coursesResolver.Mutation
    }
};