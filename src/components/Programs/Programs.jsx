import React from 'react';
import './Programs.css';

const programList = [
  "Invision",
  "Photoshop",
  "Figma",
  "Illustrator",
  "Miro",
  "ProtoPie",
  "Invision",
  "Photoshop",
];

function Programs() {
  return (
    <section className='program'>
      {programList.map((program, index) => (
        <button key={index}>{program}</button>
      ))}
    </section>
  );
}

export default Programs;
