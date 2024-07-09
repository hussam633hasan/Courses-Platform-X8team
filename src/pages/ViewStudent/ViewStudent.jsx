import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewStudent.css';
import Sidebar from '../../components/Sidebar/Sidebar';


const ViewStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    setStudent(students[id]);
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Sidebar/>
    <div className="view-container">
      <div >
        <button className="back-button"  onClick={() => navigate('/dashboard')}>
          <svg className="back-butt" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5_1206)">
              <path d="M55.125 28C55.125 13.0156 42.9844 0.875 28 0.875C13.0156 0.875 0.875 13.0156 0.875 28C0.875 42.9844 13.0156 55.125 28 55.125C42.9844 55.125 55.125 42.9844 55.125 28ZM28 51.625C15.0172 51.625 4.375 41.1141 4.375 28C4.375 15.0172 14.8859 4.375 28 4.375C40.9828 4.375 51.625 14.8859 51.625 28C51.625 40.9828 41.1141 51.625 28 51.625ZM31.5 38.5L21 28L31.5 17.5V38.5ZM35 17.5C35 14.3938 31.2266 12.8187 29.0281 15.0281L18.5281 25.5281C17.1609 26.8953 17.1609 29.1156 18.5281 30.4828L29.0281 40.9828C31.2266 43.1813 35 41.6281 35 38.5109V17.5Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_5_1206">
                <rect width="56" height="56" fill="white" transform="matrix(0 1 -1 0 56 0)" />
              </clipPath>
            </defs>
          </svg>

        </button>
        <div className="student-card">
          <div className="student-card1">
          <div >
            <svg className="student-avatar" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.50977" y="1.96875" width="71.6986" height="71.6986" stroke="#19191C" stroke-width="2" />
              <g clip-path="url(#clip0_5_1197)">
                <path d="M52.4566 59.6548C51.5144 59.6548 50.7506 58.891 50.7506 57.9488C50.7506 51.2699 45.317 45.8363 38.6381 45.8363H36.0792C29.4003 45.8363 23.9667 51.2699 23.9667 57.9488C23.9667 58.891 23.2029 59.6548 22.2607 59.6548C21.3185 59.6548 20.5547 58.891 20.5547 57.9488C20.5547 49.3886 27.5189 42.4243 36.0792 42.4243H38.6381C47.1983 42.4243 54.1626 49.3886 54.1626 57.9488C54.1626 58.891 53.3988 59.6548 52.4566 59.6548Z" fill="#19191C" />
                <path d="M37.1883 39.0123C30.8387 39.0123 25.6729 33.8464 25.6729 27.4969C25.6729 21.1473 30.8387 15.9814 37.1883 15.9814C43.5379 15.9814 48.7037 21.1473 48.7037 27.4969C48.7037 33.8464 43.5379 39.0123 37.1883 39.0123ZM37.1883 19.3934C32.72 19.3934 29.0848 23.0286 29.0848 27.4969C29.0848 31.9651 32.72 35.6003 37.1883 35.6003C41.6565 35.6003 45.2917 31.9651 45.2917 27.4969C45.2917 23.0286 41.6565 19.3934 37.1883 19.3934Z" fill="#19191C" />
              </g>
              <defs>
                <clipPath id="clip0_5_1197">
                  <rect width="70" height="60" fill="white" transform="translate(15.5225 15.9814)" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className="student-info">
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            

          </div>
          </div>
          

        <div className="student-card2"> <p>{student.content}</p></div>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default ViewStudent;

