import React, { useState } from 'react';
import './TrainingProgram.css';

const trainingData = [
  { month: "1 month", title: "Omnis voluptas assumenda est, omnis dolor repellendus" },
  { month: "2 month", title: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" },
  { month: "3 month", title: "Rerum hic tenetur a sapiente delectus" },
  { month: "4 month", title: "Omnis voluptas assumenda est, omnis dolor repellendus" },
  { month: "5 month", title: "Omnis voluptas assumenda est, omnis dolor repellendus" },
  { month: "6 month", title: "Alias consequatur aut perferendis doloribus asperiores repellat" }
];

function AccordionItem({ month, title, isOpen, onClick }) {
  return (
    <div className="accor-item">
      <div className="accor-header" onClick={onClick}>
        <div className="accor-month">{month}</div>
        <div className="accor-title">{title}</div>
        <div className="accor-icon">{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className="accor-body">Omnis voluptas assumenda est, omnis dolor repellendus</div>}
    </div>
  );
}

function TrainingProgram() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accor-container">
      <h2 className='h'>Training program</h2>
      {trainingData.map((item, index) => (
        <AccordionItem
          key={index}
          month={item.month}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default TrainingProgram;
