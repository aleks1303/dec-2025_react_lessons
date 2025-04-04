import {FC} from "react";
import {ICourseArray} from "../models/ICourseArray.ts";

type MyCourseType = {
  course: ICourseArray
}

const CourseArrayComponent:FC<MyCourseType> = ({course}) => {

    return (
            <div className={'mb-5 pl-5 bg-blue-900 text-white text-xl'}>
                <h2> Course: {course.title} - {course.monthDuration} month</h2>
                <h2>{course.hourDuration} hour</h2>
                <ul>Modules: {course.modules.map((value, index) => (
                    <li className={'pl-2'} key={index}>- "{value}"</li>
                ))}</ul>
                <hr/>
            </div>


    );
};

export default CourseArrayComponent;