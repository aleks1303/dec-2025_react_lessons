import {Link} from "react-router-dom";


const MenuComponents = () => {
    return (
        <>
            <ul>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
        </>
    );
};

export default MenuComponents;