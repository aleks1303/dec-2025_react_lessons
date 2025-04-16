import {Link} from "react-router-dom";


const MenuPostsComponent = () => {
    return (
        <>
            <ul className={'flex justify-around p-2'}>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder-posts</Link></li>
                <li><Link to={'dummyjson'}>dummyjson-posts</Link></li>
            </ul>
        </>
    );
};

export default MenuPostsComponent;