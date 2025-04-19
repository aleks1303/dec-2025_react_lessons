import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const pageNum = Number(page);
    const onClickPrev = () => {
        if (page) {
            let currencyPage = Number(page);
            currencyPage--
            setQuery({page: currencyPage.toString()})
        }
    }
    const onClickNext = () => {
        if (page) {
            let currencyPage = Number(page);
            currencyPage++
            setQuery({page: currencyPage.toString()})
        }
    }
    const buttonClass = 'border-1 w-15 p-3';
    const buttonDisabled = 'opacity-50 cursor-not-allowed'

    return (
        <div>
            <button className={`${buttonClass} ${pageNum <= 1 ? buttonDisabled : ''}}`} disabled={pageNum <= 1} onClick={onClickPrev}>prev</button>
            <button className={`${buttonClass} ${pageNum >=7 ? buttonDisabled : ''}}`}  disabled={pageNum >= 7} onClick={onClickNext}>next</button>
        </div>
    );
};

export default PaginationComponent;