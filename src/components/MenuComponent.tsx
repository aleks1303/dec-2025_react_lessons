import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul className={'flex justify-between m-2'}>
             <li><Link to={'users'}>users</Link></li>
             <li><Link to={'posts'}>posts</Link></li>
             <li><Link to={'comments'}>comments</Link></li>
             <li><Link to={'products'}>products</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;