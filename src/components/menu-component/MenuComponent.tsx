import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'cars'}>cars</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;