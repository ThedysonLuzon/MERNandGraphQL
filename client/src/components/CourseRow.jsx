import {FaTrash} from 'react-icons/fa';
import {useMutation} from '@apollo/client';
import {DELETE_COURSE} from '../mutations/courseMutations';
import {GET_COURSES} from '../queries/courseQueries';

export default function CourseRow({course}) {

    const [deleteCourse] = useMutation(DELETE_COURSE, {
        variables: {
            id: course.id
        },
        refetchQueries: [{query: GET_COURSES}],
    });

  return (

    <tr>
        <td>{course.courseName}</td>
        <td>{course.courseCode}</td>
        <td>{course.semester}</td>
        <td>{course.section}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteCourse}>
                <FaTrash />
            </button>
        </td>
    </tr>  
    )
}
