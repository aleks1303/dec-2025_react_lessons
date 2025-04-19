import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({asd: '1'});
    const page = query.get('page')
    const onClickPrev = () => {
        if (page) {
          let currencyPage = Number(page)
            setQuery({page: (--currencyPage).toString()})
        }
    }
    const onClickNext = () => {
        if (page) {
            let currencyPage = Number(page);
            setQuery({page: (++currencyPage).toString()})
        }
    }





    return (
        <div>
            <button onClick={onClickPrev} className={'border-1 m-1 w-15'}>prev</button>
            <button onClick={onClickNext} className={'border-1 m-1 w-15'}>next</button>
        </div>
    );
};

export default PaginationComponent;