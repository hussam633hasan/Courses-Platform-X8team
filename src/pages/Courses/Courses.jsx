
import React from "react";

import HeaderCourses from "../../components/HeaderCourses/HeaderCourses.jsx";
import ProfessionDesigner from "../../components/ProfessionDesigner/ProfessionDesigner";
import CoursesInfo from "./../../components/CoursesInfo/CoursesInfo.jsx"
import Programs from "../../components/Programs/Programs.jsx";
import StudentsProjects from '../../components/StudentsProjects/StudentsProjects';
import TrainingProgram from '../../components/TrainingProgram/TrainingProgram';
import Teachers from "../../components/Teachers/Teachers";
import Price from "../../components/Price/Price";

function Courses() {

    return (<>
        <HeaderCourses />
        <ProfessionDesigner />
        <CoursesInfo />
        <Programs />
        <StudentsProjects />
        <TrainingProgram />
        <Teachers />
        <Price />
    </>
    )


}
export default Courses;