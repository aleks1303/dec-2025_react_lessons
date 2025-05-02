


import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const pageNum = Number(page);
    const totalPages = 7

    const onClickPrev = () => {
        if(page) {
            let current = Number(page);
            current--
            setQuery({page: current.toString()})
        }
    }
    const onClickNext = () => {
        if(page) {
            let current = Number(page);
            current++
            setQuery({page: current.toString()})
        }
    }
    const onClickNumbers = (num: number) => {
        setQuery({page: num.toString()})
    }

    const baseClass = 'border-1 w-12 m-2'
    const disabledClass = 'opacity-50'
    const activeClass = 'bg-blue-500 text-white'


    return (
        <div>
            <button disabled={pageNum <= 1} className={`${baseClass} ${pageNum <= 1 ? disabledClass : ''}`} onClick={onClickPrev}>prev</button>
            {[...Array(totalPages)].map((_, i) => {
                const num = i + 1
                return (
                    <button key={num} className={`${baseClass} ${pageNum === num ? activeClass: ''}}`} onClick={() => onClickNumbers(num)}
                    >{num}</button>
                )
            })}
            <button disabled={pageNum >= totalPages} className={`${baseClass} ${pageNum >= totalPages ? disabledClass : ''}`} onClick={onClickNext}>next</button>
        </div>
    );
};

export default PaginationComponent;