const mongoose = require('mongoose');

// create Course model
const CourseModel = mongoose.model("course",{
    courseCode: String,
    courseName: String,
    section: String,
    semester: String
});

module.exports = mongoose.model('Course', CourseSchema);