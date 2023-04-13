import { useQuery } from '@apollo/client';
import CourseRow from './CourseRow';
import { GET_COURSES} from '../queries/courseQueries';


export default function Courses() {

  const {loading, error, data} = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;


  return <>
    
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Semester</th>
              <th>Section</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.courses.map((course) => (
              <CourseRow key={course.id} course={course} />
            ))}
          </tbody>
        </table>

      )}</>;
}
