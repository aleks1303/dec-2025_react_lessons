import {Link} from "react-router-dom";


const MenuPostsComponent = () => {
    return (
        <>
            <ul>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>dummyjson</Link></li>
            </ul>
        </>
    );
};

export default MenuPostsComponent;