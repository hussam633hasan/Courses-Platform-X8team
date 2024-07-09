import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStudent.css';
import Sidebar from '../../components/Sidebar/Sidebar';


const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students[id];
    if (student) {
      setName(student.name);
      setCourse(student.course);
      setContent(student.content);
      setDate(student.date);
    }
  }, [id]);

  const handleSubmit = () => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students[id] = { name, course, content, date };
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/dashboard');
  };

  return (
    <>
    <Sidebar/>
    <div className="form-container">
      <h1>Edit Student</h1>
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

export default EditStudent;
