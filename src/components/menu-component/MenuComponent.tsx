import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/auth/resources'}>Resources</Link></li>
            </ul>
        </>
    );
};

export default MenuComponent;