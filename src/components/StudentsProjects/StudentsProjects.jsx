import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentsProjects.css';

const Projects = () => {
  return (

    <div className='ba-contain'>
        <div>
      
      <h2 className='ba-h2'>Projects of our students</h2>
      <div className="row-bacontain">
        <div>
          <div className="ba-card-1">
            <img src="./assets/images/Courses/Rectangle 98.png" className="card-img-top" alt="Mobile App" />
            <div className="bacard-body">
              <p className="bacard-text">Landing page</p>
            </div>
          </div>
        </div>
        <div>
          <div className="ba-card-1 ba-card-2">
          <img src="./assets/images/Courses/Mask group.png" className="card-img-top" alt="Mobile App" />
            <div className="bacard-body">
              <p className="bacard-text">Mobile App</p>
            </div>
          </div>
        </div>
        <div >
          <div className="ba-card-1">
          <img src="./assets/images/Courses/Rectangle 101.png" className="card-img-top" alt="Mobile App" />
            <div className="bacard-body">
              <p className="bacard-text">E-commerce</p>
            </div>
          </div>
        </div>
        <div>
          <div className="ba-card-1">
          <img src="./assets/images/Courses/Rectangle 103.png" className="card-img-top" alt="Mobile App" />
            <div className="bacard-body">
              <p className="bacard-text">Redesign Concept</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
      
  );
};

export default Projects;
