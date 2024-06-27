// import "./Header.css"

// export default function Header() {
//   return (
//     <section className="HH-Header">
//       <div><img className="HH-Ellipse-20" src="./public/assets/images/Hero_Images/Main page/Ellipse 20.png " /></div>
//       <div className="HH-Header-part1">

//         <h1>Explore thousands of hands-on creative classes.</h1>
//         <p>Start learning for <span style={{
//           color: "#504DEE",
//           fontFamily: "inter",
//           fontWeight: 700,
//         }}>free</span></p>
//         <button className="HH-Header-button">Choose a cource</button>
//         <div>
//           <div style={{ marginTop: 25 }}>
//             <h1>50%</h1>
//             <p>24 Days 17:44:16</p>
//           </div>
//           <div><img className="HH-Vector-9" src="./public/assets/images/Hero_Images/Main page/Vector 9.png " /></div>
//         </div>
//       </div>
//       <div><img className="HH-Ellipse-21" src="./public/assets/images/Hero_Images/Main page/Ellipse 21.png " /></div>
//       <div className="HH-Header-part2">
//         <img src="./public/assets/images/Hero_Images/Main page/Courses and image.png" />
//       </div>
//     </section>
//   )
// }

// ///////

// Header.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Header.css'; 


const Header= () => {
  return (
    <header className="bg-light py-5">
      < div className="contain-header">
        <Row className='R-header'>
          <Col md={4}>
            <div className='H'>
            <h2>Explore thousands of hands-on creative classes.</h2>
            <p>Start learning for <a href="">free</a></p>
            </div>
           <div className='DD'>
           <Button variant="primary buttom">Choose a course</Button>
            <div className="mt-3  D">
              <span className='D1'>50% </span>
              <span className='D2'>24 Days 17:44:16</span>
              <svg width="78" height="159" viewBox="0 0 78 159" fill="none" xmlns="http://www.w3.org/2000/svg" className='svgg'>
<path d="M40.3614 91.0258L41.1497 90.4106L40.3614 91.0258ZM56.777 102.473L57.31 103.319L56.777 102.473ZM63.423 0.0649914C62.9066 -0.130863 62.3292 0.128984 62.1334 0.645375L58.9417 9.06045C58.7459 9.57684 59.0057 10.1542 59.5221 10.3501C60.0385 10.5459 60.6159 10.2861 60.8117 9.7697L63.6487 2.28963L71.1288 5.12663C71.6452 5.32249 72.2226 5.06264 72.4184 4.54625C72.6143 4.02986 72.3545 3.45247 71.8381 3.25662L63.423 0.0649914ZM0.882675 158.927C13.5843 153.899 27.8048 142.283 36.7951 129.267C45.7418 116.314 49.7977 101.494 41.1497 90.4106L39.573 91.641C47.3578 101.618 43.9863 115.336 35.1495 128.13C26.3562 140.861 12.4369 152.202 0.146471 157.068L0.882675 158.927ZM41.1497 90.4106C38.3575 86.8323 35.9113 84.5803 33.8096 83.417C31.6976 82.2481 29.7562 82.0999 28.2377 83.1031C26.7923 84.0579 26.0566 85.8558 25.8083 87.8131C25.5555 89.8067 25.7765 92.1673 26.4459 94.5443C27.7805 99.2828 30.9728 104.329 36.1868 106.754C41.4576 109.204 48.5238 108.854 57.31 103.319L56.2439 101.626C47.8419 106.92 41.5056 107.021 37.03 104.94C32.4977 102.833 29.5998 98.3652 28.371 94.0021C27.7588 91.8282 27.5798 89.7412 27.7924 88.0648C28.0097 86.352 28.605 85.2574 29.3401 84.7718C30.0019 84.3345 31.0902 84.1978 32.8411 85.1669C34.6023 86.1417 36.8522 88.1541 39.573 91.641L41.1497 90.4106ZM57.31 103.319C67.9691 96.603 75.1922 83.234 76.9811 65.4636C78.7716 47.6774 75.138 25.3824 63.9803 0.589607L62.1565 1.41039C73.2027 25.9555 76.7393 47.8973 74.9911 65.2632C73.2413 82.6449 66.2168 95.3432 56.2439 101.626L57.31 103.319Z" fill="#19191C"/>
</svg>

            </div>
           </div>
            
          </Col>
          <Col md={8} className='colum'>
            <img src="./public/assets/images/Hero_Images/Main page/Courses and image.png" alt="Header Image" className="img-fluid" />
          </Col>
        </Row>

        <Row className='h-img'>
        
            <img src="./public/assets/images/Hero_Images/Main page/Courses and image.png" alt="Header Image" className="img-fluid" />
    
        </Row>

      </div>
    </header>
  );
};

export default Header;

