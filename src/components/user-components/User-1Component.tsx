import {Outlet} from "react-router-dom";


const User1Component = () => {
    return (
        <div>
            User 1
            <Outlet/>
        </div>
    );
};

export default User1Component;