import {ICourseWithDirection} from "../models/ICourseWithDiraction.ts";
import {FC} from "react";

type MyPropsToTask2 = {
    course: ICourseWithDirection
}

const ComponentTask2: FC<MyPropsToTask2> = ({course}) => {
    return (
        <div>
            <div className={'bg-lime-500 p-1'}>
                {course.title}: {course.monthDuration} month
            </div>
        </div>
    );
};

export default ComponentTask2;