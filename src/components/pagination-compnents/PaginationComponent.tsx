import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const numberPage = Number(page);

    const onClickPrev = () => {
        if (page) {
            let currencyPage = Number(page);
            currencyPage--
            setQuery({page: currencyPage.toString()})
        }
    }
    const onClickNext = () => {
        if (page) {
            let currencyPage = Number(page)
            currencyPage++
            setQuery({page: currencyPage.toString()})
        }
    }

    const buttonClass = 'border-1 w-15 m-2';
    const buttonClassDisabled = 'opacity-30 cursor-not-allowed'
    return (
        <div>
            <button className={`${buttonClass} ${numberPage <= 1 ? buttonClassDisabled : ''}`} disabled={numberPage <= 1} onClick={onClickPrev}>prev</button>
            <button className={`${buttonClass} ${numberPage >= 42 ? buttonClassDisabled : ''}`} disabled={numberPage >= 42} onClick={onClickNext}>next</button>
        </div>
    );
};

export default PaginationComponent;