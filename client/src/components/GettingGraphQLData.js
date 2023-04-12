import React from 'react';
import {graphql} from "react-apollo";
import {gql} from "apollo-boost";
import '../GettingGraphQLData.css';

const GET_COURSE_INFO = gql`
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

const GettingGraphQLData = props => {
  return (
    <>
      <div className="list-type5">
        <h3>Course List</h3><br/>
        <ol>
        {props.data?.courses?.map(props => (
          <li key={props.id}><a>{props.courseCode} {props.courseName} {props.section} {props.semester}</a></li>
        ))}
          </ol>
      </div>

    </>
  );

};

export default graphql(GET_COURSE_INFO)(GettingGraphQLData);
