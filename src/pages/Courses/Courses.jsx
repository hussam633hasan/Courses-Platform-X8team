
import React from "react";

import HeaderCourses from "../../components/HeaderCourses/HeaderCourses.jsx";

import ProfessionDesigner from "../../components/ProfessionDesigner/ProfessionDesigner";

import StudentsProjects from '../../components/StudentsProjects/StudentsProjects';

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
