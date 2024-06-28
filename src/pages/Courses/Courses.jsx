
import React from "react";
<<<<<<< HEAD
import HeaderCourses from "../../components/HeaderCourses/HeaderCourses.jsx";
import StudentsProjects from '../../components/StudentsProjects/StudentsProjects';
=======
import ProfessionDesigner from "../../components/ProfessionDesigner/ProfessionDesigner";

import StudentProjects from '../../components/StudentsProjects/StudentsProjects';
>>>>>>> 30dbbb7835c885adb8922d5bd872ea8f9c91d8ee
import TrainingProgram from '../../components/TrainingProgram/TrainingProgram';
import CoursesInfo from "./../../components/CoursesInfo/CoursesInfo.jsx"
import Programs from "../../components/Programs/Programs.jsx";
import Price from "../../components/Price/Price";
import Teachers from "../../components/Teachers/Teachers";

function Courses() {

    return( <>
    <HeaderCourses/>
    <StudentsProjects/>
    <TrainingProgram/>
    <CoursesInfo />
    <Programs />
    <Teachers />
    <Price />
    <ProfessionDesigner />
        </>
        )


}
export default Courses;
