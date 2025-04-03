import {coursesAndDurationArray} from "../data/CourseWithDirection.ts";


const Task2 = () => {
    return (
        <div>

            {
                coursesAndDurationArray.map((course) => (
                    <div className={'bg-lime-500 p-1'} >
                        {course.title}: {course.monthDuration} month
                    </div>
                ))
            }
        </div>
    );
};

export default Task2;