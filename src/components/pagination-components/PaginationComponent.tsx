import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const pageNum = Number(page);
    const totalPage = 7
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
    const activeClass = "bg-blue-500 text-white";
    const handlePageClick = (num: number) => {
        setQuery({ page: num.toString() });
    };
    return (
        <div>
            <button className={`${buttonClass} ${pageNum <= 1 ? buttonDisabled : ''}}`} disabled={pageNum <= 1} onClick={onClickPrev}>prev</button>

            {[...Array(totalPage)].map((_, i) => {
                const num = i + 1;
                return (
                    <button
                        key={num}
                        onClick={() => handlePageClick(num)}
                        className={`${buttonClass} ${pageNum === num ? activeClass : ""}`}
                    >
                        {num}
                    </button>
                );
            })}
            <button className={`${buttonClass} ${pageNum >= totalPage ? buttonDisabled : ''}}`}  disabled={pageNum >= totalPage} onClick={onClickNext}>next</button>
        </div>
    );
};

export default PaginationComponent;