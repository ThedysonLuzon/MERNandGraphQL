import { gql } from "@apollo/client";

const GET_COURSES = gql`
    {
        courses{
            id
            courseCode
            courseName
            section
            semester
        }
    }
`;

export  { GET_COURSES } ;