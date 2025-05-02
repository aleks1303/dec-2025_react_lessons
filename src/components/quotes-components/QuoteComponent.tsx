import {IQuote} from "../../models/IQuote.ts";
import {FC} from "react";

type PropsQuoteType = {
    item: IQuote
}

const QuoteComponent:FC<PropsQuoteType> = ({item}) => {
    return (
        <div>
            {item.id}. {item.quote}
            {item.author}
        </div>
    );
};

export default QuoteComponent;