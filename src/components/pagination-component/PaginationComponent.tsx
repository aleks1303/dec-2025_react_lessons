import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const pageNumber = Number(page);
    const onClickPrev = () => {
        if (page) {
            let currencyPage = Number(page);
            setQuery({page: (--currencyPage).toString()})
        }
    }
    const onClickNext = () => {
        if (page) {
            let currencyPage = Number(page);
            currencyPage++
            setQuery({page: currencyPage.toString()})
        }
    }

    const baseButtonClass = 'border-1 m-1 w-15'
    const disabled = "opacity-50 cursor-not-allowed"
    return (
        <div>
            <button disabled={pageNumber <= 1} onClick={onClickPrev} className={`${baseButtonClass} ${pageNumber <= 1 ? disabled : ''}`}>prev</button>
            <button disabled={pageNumber >= 42} onClick={onClickNext}  className={`${baseButtonClass} ${pageNumber >= 42 ? disabled : ''}`}>next</button>
        </div>
    );
};

export default PaginationComponent;