import React, { useState } from 'react';
import './FAQ.css';


const FAQ = () => {
  const faqs = [
    'Omnis voluptas assumenda est, omnis dolor repellendus?',
    'Rerum hic tenetur a sapiente delectus?',
    'Alias consequatur aut perferendis doloribus asperiores repellat?',
    'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi?',
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="accordion-containerr " id='faq'>

      <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-i">
          <div className="accordion-headerr" onClick={() => toggleFAQ(index)}>
            <span>{faq}</span>
            <span className='icon'>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-contentt">
              <p>Here is the detailed answer for the question</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;


