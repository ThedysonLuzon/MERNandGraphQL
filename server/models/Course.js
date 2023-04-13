const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
    },
    courseName: {
        type: String,
    },
    section: {
        type: String,
    },
    semester: {
        type: String,
    },
});

module.exports = mongoose.model('Course', courseSchema);