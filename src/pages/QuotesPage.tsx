import QuotesComponent from "../components/quotes-components/QuotesComponent.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";


const QuotesPage = () => {
    return (
        <div>
            <PaginationComponent/>
            <QuotesComponent/>
        </div>
    );
};

export default QuotesPage;