import UsersComponent from "../components/users-components/UsersComponent.tsx";
import PaginationComponent from "../components/pagination-components/PaginationComponent.tsx";


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