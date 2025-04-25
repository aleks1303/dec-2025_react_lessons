import {Link} from "react-router-dom";


const MenuFormComponent = () => {
    return (
        <>
            <ul className={'flex justify-around'}>
                <li><Link to={'/cars/forms/create'}>create</Link></li>
                <li><Link to={'/cars/forms/delete'}>delete</Link></li>
            </ul>
        </>
    );
};

export default MenuFormComponent;