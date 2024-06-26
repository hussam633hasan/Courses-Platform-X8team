import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentsProjects.css';

const StudentsProjects = () => {
  return (

    <div className='contain'>
        <div>
      
      <h2 className='h2'>Projects of our students</h2>
      <div className="row-contain">
        <div>
          <div className="card">
            <img src=".././public/assets/images/Courses/Rectangle 98.png" className="card-img-top" alt="Mobile App" />
            <div className="card-body">
              <p className="card-text">Landing page</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-2">
          <img src=".././public/assets/images/Courses/Mask group.png" className="card-img-top" alt="Mobile App" />
            <div className="card-body">
              <p className="card-text">Mobile App</p>
            </div>
          </div>
        </div>
        <div >
          <div className="card">
          <img src=".././public/assets/images/Courses/Rectangle 101.png" className="card-img-top" alt="Mobile App" />
            <div className="card-body">
              <p className="card-text">E-commerce</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
          <img src=".././public/assets/images/Courses/Rectangle 103.png" className="card-img-top" alt="Mobile App" />
            <div className="card-body">
              <p className="card-text">Redesign Concept</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
      
  );
};

export default StudentsProjects;
