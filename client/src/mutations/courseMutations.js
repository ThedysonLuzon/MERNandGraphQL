import { gql } from "@apollo/client";

const ADD_COURSE = gql`
    mutation addCourse($courseCode: String!, $courseName: String!, $section: String!, $semester: String!) {
        addCourse(courseCode: $courseCode, courseName: $courseName, section: $section, semester: $semester) {
            id
            courseCode
            courseName
            section
            semester
        }
    }
`;

const DELETE_COURSE = gql`
    mutation deleteCourse($id: ID!) {
        deleteCourse(id: $id) {
            id
            courseCode
            courseName
            section
            semester
        }
    }
`;

const UPDATE_COURSE = gql`
    mutation updateCourse($id: ID!, $courseCode: String!, $courseName: String!, $section: String!, $semester: String!) {
        updateCourse(id: $id, courseCode: $courseCode, courseName: $courseName, section: $section, semester: $semester) {
            id
            courseCode
            courseName
            section
            semester
        }
    }
`;

export { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE };