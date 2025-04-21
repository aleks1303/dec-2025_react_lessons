import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const pageNum = Number(page)
    const totalPages = 7

    const onClickPrev = () => {
        if (page) {
            let currencyPage = +page;
            currencyPage--
            setQuery({page: currencyPage.toString()})
        }
    }
    const onClickNext = () => {
        if (page) {
            let currencyPage = +page;
            currencyPage++
            setQuery({page: currencyPage.toString()})
        }
    }

    const onClickMiddles = (num: number) => {
        setQuery({page: num.toString()})
    }


    const baseClassButton = 'border-1 w-15 m-2'
    const disabledClass = 'opacity-50'
    // {[...Array(totalPages)].map((_, i) => {
    //     const num = i + 1
    //
    // })}
    return (
        <div>
            <button disabled={pageNum <= 1} className={`${baseClassButton} ${pageNum <= 1 ? disabledClass : ''}`} onClick={onClickPrev}>prev</button>

            {[...Array(totalPages)].map((_, i) => {
                const num = i + 1;
                return (
                    <button
                        key={num}
                        onClick={() => onClickMiddles(num)}
                        className={${baseButtonClass} ${pageNumber === num ? activeClass : ""}}
                    >
                        {num}
                    </button>
                );
            })
            <button disabled={pageNum >= 7} className={`${baseClassButton} ${pageNum >= 7 ? disabledClass : ''}`} onClick={onClickNext}>next</button>

        </div>
    );
};

export default PaginationComponent;