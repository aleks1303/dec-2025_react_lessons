import {FC} from "react";
import {ICourseArray} from "../models/ICourseArray.ts";

type MyCourseType = {
  course: ICourseArray
}

const CourseArrayComponent:FC<MyCourseType> = (course) => {

    return (

            <div className={'mb-5 pl-5'}>
                <h2>{course.title} - {course.monthDuration} month</h2>
                <h2>{course.hourDuration} hour</h2>
            </div>

    );
};

export default CourseArrayComponent;