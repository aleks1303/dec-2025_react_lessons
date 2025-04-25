import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'cars'}>cars</Link></li>
                <li><Link to={'cars/create'}>create</Link></li>
                <li><Link to={'cars/delete'}>delete</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;