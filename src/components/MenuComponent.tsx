import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'about'}>about</Link></li>
                <li><Link to={'contacts'}>contacts</Link></li>
            </ul>
        </>
    );
};

export default MenuComponent;