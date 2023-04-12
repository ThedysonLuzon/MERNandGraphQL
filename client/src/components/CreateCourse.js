import React, { useState } from 'react';
import {graphql} from "react-apollo";
import {gql} from "apollo-boost";

const GET_COURSE_INFO = gql`
  {
      courses{
              _id
              courseCode
              courseName
              section
              semester
      }
  }
`;

const CourseCreate = props => {

    const [addCourse, setAddCourse] = useState({
        courseCode:"",
        courseName:"",
        section:"",
        semester:""
    });

    async function onSubmit(e){
        e.preventDefault();
    }

    return (
        <>

        <div>
            <form onSubmit={onSubmit}>
            <h3> Create New Course</h3>
            <div className="form-group">
                <label htmlFor="courseName">Course Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="courseName"
                />
            </div>
            <div className="form-group">
                <label htmlFor="courseCode">Course Code:</label>
                <input
                    type="text"
                    className="form-control"
                    id="courseCode"
                />
            </div>
            <div className="form-group">
                <label htmlFor="section">Section:</label>
                <input
                    type="text"
                    className="form-control"
                    id="section"
                />
            </div>
            <div className="form-group">
                <label htmlFor="semester">Semester:</label>
                <input
                    type="text"
                    className="form-control"
                    id="semester"
                />
            </div>
            </form>
        </div>
        
        </>
    );
};

export default graphql(GET_COURSE_INFO)(CourseCreate);
