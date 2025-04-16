import {Link} from "react-router-dom";


const MenuLayoutComponent = () => {
    return (
        <>
            <ul className={'flex justify-around p-5'}>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
        </>
    );
};

export default MenuLayoutComponent;