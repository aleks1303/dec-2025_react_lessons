import {useDummy} from "../hooks/useDummy.tsx";
import {IQuotesBase} from "../models/IQuotesModel/IQuotesBase.ts";


const QuotesComponent = () => {
    const {quotes} = useDummy<IQuotesBase>('https://dummyjson.com/Quotes', {
        total: 0,
        skip: 0,
        limit: 0,
        quotes:[]
    });
    return (
        <div>
            {quotes.map(quote => (<div key={quote.id}>{quote.id}. {quote.quote}</div>))}
        </div>
    );
};

export default QuotesComponent;