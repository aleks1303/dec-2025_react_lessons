import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import UsersComponent from "../components/users-components/UsersComponent.tsx";


const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;