import React from 'react';
import Card from './Cards';
import './StylesTop.css';

const StylesTop = () => {
  const styles = [
    { image: './assets/images/Article/Rectangle 171.png', title: '3D' },
    { image: './assets/images/Article/Mask group.png', title: 'Abstract' },
    { image: './assets/images/Article/Mask group (1).png', title: 'Vintage & Retro' },
  ];

  return (
    <div className="cont-style text-center my-5">
      <h2 className="mb-5">Top 3 styles in 2022</h2>
      <div className="row-style">
        {styles.map((style, index) => (
          <Card key={index} image={style.image} title={style.title} isSpecial={index === 2} />
        ))}
      </div>
    </div>
  );
};

export default StylesTop;
