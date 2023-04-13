import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_COURSE } from '../mutations/courseMutations';
import { GET_COURSES } from '../queries/courseQueries';

export default function AddCourseModal() {

    const [courseName, setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [semester, setSemester] = useState('');
    const [section, setSection] = useState('');

    const [addCourse] = useMutation(ADD_COURSE, {
        variables: {
            courseName,
            courseCode,
            semester,
            section
        },
        update(cache, { data: { addCourse } }) {
            const { courses } = cache.readQuery({ query: GET_COURSES });
            cache.writeQuery({
                query: GET_COURSES,
                data: { courses: [...courses, addCourse] },
            });
        }
    });

    const onSubmit = (e) => {
        // e.preventDefault();

        if (courseName ==='' || courseCode === '' || semester === '' || section === '') {
            return alert('Please fill in all fields');
        }
        addCourse(courseName, courseCode, semester, section);

        setCourseName('');
        setCourseCode('');
        setSemester('');
        setSection('');
    };

  return (
    <div>
<button type='button' className='btn btn-secondary' data-bs-toggle='modal' data-bs-target='#addCourseModal'>
    <div className='d-flex align-items-center'>
        <FaPlus className='icon' />
        <div>Add Course</div>
    </div>
</button>

<div className='modal fade' id='addCourseModal' aria-labelledby='addCourseModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1 className='modal-title' id='addCourseModalLabel'>Add Course</h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>             
    </div>
    <div className='modal-body'>
        <form onSubmit={onSubmit}> 
            <div className='mb-3'>
                <label className='form-label'>Course Name</label>
                <input 
                    type='text' 
                    className='form-control' 
                    id='courseName' 
                    value={courseName} 
                    onChange={(e) => setCourseName(e.target.value)} 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Course Code</label>
                <input 
                type='text' 
                className='form-control' 
                id='courseCode' 
                value={courseCode} 
                onChange={(e) => setCourseCode(e.target.value)} 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Semester</label>
                <input type='text' className='form-control' id='semester' value={semester} onChange={(e) => setSemester(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Section</label>
                <input type='text' className='form-control' id='section' value={section} onChange={(e) => setSection(e.target.value)} />
            </div>
            <button type='submit' 
            data-bs-dismiss='modal' className='btn btn-secondary'>Submit</button>
        </form>
    </div>
    </div>
    </div>
    </div>
</div>
)
}
