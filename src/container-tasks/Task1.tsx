import {coursesTitle} from "../data/CoursesTitle.ts";
import CoursesTitleArray from "../components/CoursesTitleArray.tsx";


const Task1 = () => {
    return (
        <div>
            {
                coursesTitle.map((course, index) => (
                    <CoursesTitleArray key={index} course={course}/>
                ))
            }
        </div>
    );
};

export default Task1;