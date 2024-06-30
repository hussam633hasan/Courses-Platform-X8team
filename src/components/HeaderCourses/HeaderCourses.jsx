import React from 'react';
import Header from './../../components/Header/Header';
import './HeaderCourses.css';
const HeaderCourses=()=> {
    return (<>
   
    <Header p1="6 months" p2="profession:"title="UI/UX designer "
     description="
You will learn how to create a brand 
identity on the web and for printing.
Learn how to work in Illustrator, 
Photoshop, InDesign and Figma.
Add posters, logos, merch design and other strong
 projects to your portfolio.
Start a career in the studio or freelance." 
     buttontext="Started" 
     imagesurc="./public/assets/images/Courses/Programms and image.png" 
    discount= {
        25
    }
    day= {
        17
    }
   />
  
   </>)}



export default HeaderCourses;