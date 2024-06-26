
import React from "react";

import StudentProjects from '../../components/StudentsProjects/StudentsProjects';
import TrainingProgram from '../../components/TrainingProgram/TrainingProgram';
import CoursesInfo from "./../../components/CoursesInfo/CoursesInfo.jsx"
import Programs from "../../components/Programs/Programs.jsx";
import Price from "../../components/Price/Price";
import Teachers from "../../components/Teachers/Teachers";

function Courses() {
    return( <>
    <StudentsProjects/>
    <TrainingProgram/>
    <CoursesInfo />
    <Programs />
    <Teachers />
    <Price />       
        </>
        )


}
export default Courses;
