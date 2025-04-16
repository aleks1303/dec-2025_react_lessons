import {Link} from "react-router-dom";


const MenuCommentsComponent = () => {
    return (
        <>
            <ul className={'flex justify-around p-2 bg-blue-600 text-white'}>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder-comments</Link></li>
                <li><Link to={'dummyjson'}>dummyjson-comments</Link></li>
            </ul>
        </>
    );
};

export default MenuCommentsComponent;