import {Link} from "react-router-dom";


const MenuUsersComponent = () => {
    return (
        <>
            <ul className={'flex justify-around p-2 bg-yellow-600 text-white'}>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder-users</Link></li>
                <li><Link to={'dummyjson'}>dummyjson-users</Link></li>
            </ul>
        </>
    );
};

export default MenuUsersComponent;