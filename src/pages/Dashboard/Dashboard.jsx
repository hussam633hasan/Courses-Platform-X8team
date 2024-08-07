
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

import Sidebar from "../../components/SideBarDashboard/SideBar";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    } else {
      const initialData = Array(7).fill({
        name: 'Guy Hawkins',
        course: 'Write',
        content: 'Ugit, sed quia consequuntur magni ....',
        date: '08-Dec-2021'
      });
      setStudents(initialData);
      localStorage.setItem('students', JSON.stringify(initialData));
    }
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
    localStorage.setItem('students', JSON.stringify(newStudents));
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (

    <>
    <Sidebar/>

<div className="container-studen">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="icon-button icon-stud">
          <span className="icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_412)">
              <path d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1687 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687ZM5.6875 10.5C3.02695 10.5 0.875 8.34805 0.875 5.6875C0.875 3.02695 3.02695 0.875 5.6875 0.875C8.34805 0.875 10.5 3.02695 10.5 5.6875C10.5 8.34805 8.34805 10.5 5.6875 10.5Z" fill="#C4C4C4" />
            </g>
            <defs>
              <clipPath id="clip0_4_412">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </span>
        </button>
        <button className="icon-button icon-stud">
          <span className="icon"><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_407)">
              <path d="M8.49982 18.75C9.16995 18.75 9.7141 18.1883 9.7141 17.4988H10.9284C10.9284 18.8781 9.83857 20 8.49982 20C7.16107 20 6.07124 18.8781 6.07124 17.4988H7.28553C7.28553 18.1883 7.82968 18.75 8.49982 18.75ZM0.55459 13.0785C1.61557 12.0387 2.42687 10.9504 2.42687 7.26172C2.42687 4.15273 4.83229 1.61719 7.89267 1.31055V0.625C7.89267 0.279687 8.16437 0 8.49982 0C8.83526 0 9.10696 0.279687 9.10696 0.625V1.31094C12.1673 1.61758 14.5728 4.15273 14.5728 7.26172C14.5728 10.95 15.3844 12.0387 16.4454 13.0785C16.9755 13.598 17.1429 14.3836 16.8723 15.0797C16.5961 15.7906 15.9312 16.25 15.1784 16.25H1.82124C1.06839 16.25 0.403563 15.7902 0.127312 15.0793C-0.143246 14.3832 0.024477 13.598 0.55459 13.0785ZM1.82124 15H15.1784C15.7184 15 15.9882 14.3566 15.6079 13.984C14.2851 12.6875 13.3585 11.2363 13.3585 7.26211C13.3585 4.63008 11.1853 2.5 8.49982 2.5C5.81472 2.5 3.64115 4.62969 3.64115 7.26172C3.64115 11.2207 2.72247 12.6797 1.39169 13.9836C1.00995 14.3582 1.28354 15 1.82124 15Z" fill="#C4C4C4" />
            </g>
            <defs>
              <clipPath id="clip0_4_407">
                <rect width="17" height="20" fill="white" transform="matrix(-1 0 0 1 17 0)" />
              </clipPath>
            </defs>
          </svg>
          </span>
        </button>
      </div>
      <div className='h-student'>
      <h2>Students say List</h2>
      <button className="add-button" onClick={() => navigate('/add-student')}>
        ADD NEW STUDENT SAY
      </button>
      </div>
      <table className='table-student'>
        <thead>
          <tr>
            <th className='th-student'>Name</th>
            <th className='th-student'>Course</th>
            <th className='th-student'>Content</th>
            <th className='th-student'>Date of Say</th>
            <th className='th-student'></th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td className='th-student'>{student.name}</td>
              <td className='th-student'>{student.course}</td>
              <td className='th-student'>{student.content}</td>
              <td className='th-student'>{student.date}</td>
              <td className='icon-student th-student'>
                <button className='icon-stud'  onClick={() => navigate(`/view-student/${index}`)}><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1.1875C11.158 1.18523 12.7867 1.62393 14.2193 2.45862C15.6518 3.29332 16.8366 4.49398 17.6522 5.9375C16.8326 7.37674 15.6467 8.57336 14.2148 9.40574C12.7829 10.2381 11.1562 10.6766 9.5 10.6766C7.84377 10.6766 6.21707 10.2381 4.78521 9.40574C3.35334 8.57336 2.16737 7.37674 1.34781 5.9375C2.16338 4.49398 3.34817 3.29332 4.78071 2.45862C6.21326 1.62393 7.84202 1.18523 9.5 1.1875ZM9.5 0C7.51988 0.00311929 5.58025 0.561051 3.9011 1.61052C2.22196 2.65998 0.870499 4.15898 0 5.9375C0.867988 7.71799 2.21887 9.21871 3.89857 10.2685C5.57828 11.3183 7.51921 11.875 9.5 11.875C11.4808 11.875 13.4217 11.3183 15.1014 10.2685C16.7811 9.21871 18.132 7.71799 19 5.9375C18.1295 4.15898 16.778 2.65998 15.0989 1.61052C13.4198 0.561051 11.4801 0.00311929 9.5 0Z" fill="#504DEE" />
                  <path d="M9.49973 2.34824C8.78873 2.34295 8.09219 2.54895 7.49844 2.9401C6.90469 3.33126 6.44049 3.88995 6.16473 4.54531C5.88897 5.20067 5.81407 5.92317 5.94953 6.62116C6.08499 7.31915 6.4247 7.96119 6.92558 8.46583C7.42647 8.97046 8.06594 9.31497 8.7629 9.45564C9.45986 9.59631 10.1829 9.5268 10.8403 9.25595C11.4977 8.98509 12.0598 8.52508 12.4554 7.93428C12.851 7.34347 13.0622 6.64848 13.0622 5.93746C13.0658 5.46739 12.9762 5.00126 12.7988 4.56595C12.6213 4.13064 12.3595 3.73475 12.0283 3.4011C11.6971 3.06746 11.3032 2.80266 10.8692 2.62196C10.4353 2.44126 9.96982 2.34823 9.49973 2.34824ZM8.31223 5.93746C8.07736 5.93746 7.84777 5.86782 7.65249 5.73733C7.45721 5.60685 7.305 5.42139 7.21512 5.2044C7.12524 4.98741 7.10173 4.74865 7.14755 4.51829C7.19337 4.28794 7.30646 4.07635 7.47254 3.91027C7.63861 3.7442 7.85021 3.6311 8.08056 3.58528C8.31091 3.53946 8.54968 3.56298 8.76666 3.65286C8.98365 3.74273 9.16911 3.89494 9.2996 4.09022C9.43008 4.28551 9.49973 4.5151 9.49973 4.74996C9.49973 5.06491 9.37462 5.36695 9.15192 5.58965C8.92922 5.81235 8.62717 5.93746 8.31223 5.93746Z" fill="#504DEE" />
                </svg>
                </button>
                <button className='icon-stud' onClick={() => navigate(`/edit-student/${index}`)}><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_278)">
                    <path d="M18.3033 2.08777L16.9113 0.695801C16.4478 0.231934 15.8399 0 15.2321 0C14.6242 0 14.0164 0.231934 13.5525 0.69543L0.475916 13.772L0.00462689 18.0107C-0.0547481 18.5443 0.365701 19 0.88783 19C0.920858 19 0.953885 18.9981 0.987654 18.9944L5.22332 18.5265L18.3036 5.44617C19.231 4.51881 19.231 3.01514 18.3033 2.08777ZM4.67818 17.3924L1.2259 17.775L1.61035 14.3175L11.4031 4.52475L14.4747 7.59629L4.67818 17.3924ZM17.4639 4.60676L15.3141 6.7565L12.2426 3.68496L14.3923 1.53521C14.6164 1.31107 14.9148 1.1875 15.2321 1.1875C15.5494 1.1875 15.8474 1.31107 16.0719 1.53521L17.4639 2.92719C17.9266 3.39031 17.9266 4.14363 17.4639 4.60676Z" fill="#504DEE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_278">
                      <rect width="19" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                </button>
                <button className='icon-stud' onClick={() => handleDelete(index)}><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_276)">
                    <path d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z" fill="#504DEE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_276">
                      <rect width="16" height="18" fill="white" transform="matrix(-1 0 0 1 16 0)" />
                    </clipPath>
                  </defs>
                </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    
    </>
    
  );
};


export default Dashboard;
