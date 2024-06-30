import React from 'react';
import Card from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylesTop.css'; 

const StylesTop  = () => {
  const styles = [
    { image: '.././public/assets/images/Courses/Rectangle 171.png', title: '3D' },
    { image: '.././public/assets/images/Courses/Mask group.png', title: 'Abstract' },
    { image: '.././public/assets/images/Courses/Mask group (1).png', title: 'Vintage & Retro' },
  ];

  return (
    <div className="containe text-center my-5">
      <h2 className="mb-5">Top 3 styles in 2022</h2>
      <div className="row1">
        {styles.map((style, index) => (
          <Card key={index} image={style.image} title={style.title} />
        ))}
      </div>
    </div>
  );
};

export default StylesTop ;
