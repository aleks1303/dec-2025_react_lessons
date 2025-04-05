import {coursesArray} from "../data/CourseArray.ts";
import MyComponentCourse from "./MyComponentCourse.tsx";

const CourseArrayComponent = () => {

    return (
        <>
            {
                coursesArray.map((course, index) => (
                    <MyComponentCourse key={index} course={course}/>
                ))
            }
        </>

    );
};

export default CourseArrayComponent;