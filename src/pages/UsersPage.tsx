import PaginationComponent from "../components/pagination-components/PaginationComponent.tsx";
import UsersComponent from "../components/user-components/UsersComponent.tsx";


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