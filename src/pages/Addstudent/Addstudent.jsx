import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';
import Sidebar from '../../components/Sidebar/Sidebar';


const AddStudent = () => {

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name, course, content, date });
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/dashboard');
  };

  return (
    <>
    <Sidebar/>
    <div className="f-container">
      <h1 className='h1-add'>Add New Student</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="f-group">
          <label>Student name <span>*</span></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="f-group">
          <label>Course name <span>*</span></label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="f-group">
          <label>What he say <span>*</span></label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="f-group">
          <label>date <span>*</span></label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className='add-buttt'>
        <button  className="add-butt" type="submit">Save</button>
        </div>
        
      </form>
    </div>
    </>
  );
};


export default AddStudent;
