import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '30'});
   const onClickNext = () => {
       const page = query.get('page')
       if (page) {
           let currencyPage = +page
           setQuery({page: (++currencyPage).toString()})
       }
   }
    const onClickPrev = () => {
        const page = query.get('page')
        if (page) {
            let currencyPage = +page
            setQuery({page:( --currencyPage) + ''})
        }
    }
    return (
        <div>
            <button className={'border-1 m-2 p-1'} onClick={onClickPrev}>prev</button>
            <button className={'border-1 m-2 p-1'} onClick={onClickNext}>next</button>
        </div>
    );
};

export default PaginationComponent;