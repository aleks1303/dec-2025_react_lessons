import {Link} from "react-router-dom";


const MenuLayoutComponent = () => {
    return (
        <div >
            <ul className={'flex justify-around p-2'}>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
        </div>
    );
};

export default MenuLayoutComponent;