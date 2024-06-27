import React from "react";
import "./Footer.css";

const InfoSection = ({ title, items }) => {
  return (
    <div className='info-section'>
      <h6>{title}</h6>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a href={item.link} target="_blank">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

function Footer() {
  const courses = [
    { text: 'Animation' },
    { text: 'Design' },
    { text: 'Illustration' },
    { text: 'Programming' },
    { text: 'Photo & Film' },
    { text: 'Marketing' }
  ];

  const teachers = [
    { text: 'All teachers', link: '#teachers' },
    { text: 'Becoming a Teacher' }
  ];

  const information = [
    { text: 'Blog', link: '/blog' },
    { text: 'About Us' },
    { text: 'FAQ', link: '#faq' }
  ];

  const languages = [
    { text: 'English' },
    { text: 'French' },
    { text: 'Russian' }
  ];

  return (
    <section className="footer-section">
      <section className="footer">
        <div className="contact-section">
          <div className="logo-container">
            <img
              className="logo"
              src="./../../../public/assets/images/Footer/logo.png"
              alt="logo"
            />
            <h6>UpDate</h6>
          </div>
          <div className="contactInfo">
            <h4>support@update.com</h4>
            <h4>+1 (213) 677 10 24</h4>
          </div>
          <div className="social_media">
            <img
              src="./../../../public/assets/images/Footer/Facebook.png"
              alt="Facebook logo"
            />
            <img
              src="./../../../public/assets/images/Footer/Youtube.png"
              alt="Youtube logo"
            />
            <img
              src="./../../../public/assets/images/Footer/Twitter.png"
              alt="Twitter logo"
            />
          </div>
        </div>

        <div className="info-sections">
          <InfoSection title="Courses" items={courses} />
          <InfoSection title="Teachers" items={teachers} />
          <InfoSection title="Information" items={information} />
          <InfoSection title="Languages" items={languages} />
        </div>
      </section>
      <section className="copyright">
        <p>Policy privcay</p>
        <p>Copyright 2022. All rights reserved</p>
      </section>
    </section>
  );
}

export default Footer;
