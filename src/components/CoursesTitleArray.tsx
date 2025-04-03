import {FC} from "react";

type CourseType = {
course: string
}

const CoursesTitleArray: FC<CourseType> = ({course}) => {
    return (
        <div>
            <h2> title course: {course}</h2>
    </div>
    );
};

export default CoursesTitleArray;