import {coursesTitle} from "../data/CoursesTitle.ts";

const Task1 = () => {
    return (
        <div>
            <ul>{
                coursesTitle.map((course, index) => (
                    <li className={'bg-yellow-50 p-1 text-gray-500 underline decoration-indigo-500/30'} key={index}>{course}</li>
                ))
            }</ul>
        </div>
    );
};

export default Task1;