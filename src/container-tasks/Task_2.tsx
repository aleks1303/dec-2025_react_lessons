import {coursesAndDurationArray} from "../data/CourseWithDirection.ts";
import ComponentTask2 from "../components/ComponentTask2.tsx";


const Task2 = () => {
    return (
        <div>
            {
                coursesAndDurationArray.map((course, index) => (
                    <ComponentTask2 key={index} course={course}/>
                ))
            }
        </div>
    );
};

export default Task2;