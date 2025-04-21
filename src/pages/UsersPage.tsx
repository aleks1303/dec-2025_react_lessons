import UsersComponents from "../components/user-components/UsersComponents.tsx";
import PaginationComponent from "../components/pagination-components/PaginationComponent.tsx";


const UsersPage = () => {
    return (
        <div>
            <UsersComponents/>
            <hr/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;