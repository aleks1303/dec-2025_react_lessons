import {Link} from "react-router-dom";


const MenuUsersComponent = () => {
    return (
        <>
            <ul className={'flex justify-around'}>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>dummyjson</Link></li>
            </ul>
        </>
    );
};

export default MenuUsersComponent;