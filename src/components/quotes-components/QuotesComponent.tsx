import {useEffect, useState} from "react";
import {loadAuthQuotes, refresh} from "../../services/api.service.tsx";
import {IQuote} from "../../models/IQuote.ts";
import QuoteComponent from "./QuoteComponent.tsx";
import {useSearchParams} from "react-router-dom";


const QuotesComponent = () => {
    const [quotes, setQuotes] = useState<IQuote[]>([])
    const [query] = useSearchParams({page:'1'});
    useEffect(() => {
        const page = query.get('page') || '1'
        loadAuthQuotes(page).then(response => {

            setQuotes(response)
        }).catch(reason => {
                console.log(reason)
                refresh()
                    .then(() => loadAuthQuotes(page))
                    .then(response => {
                        setQuotes(response)
                    })
            }
        )
    }, [query]);
    return (
        <div>
            {
                quotes.map(quote => (<QuoteComponent key={quote.id} item={quote}/>))
            }
        </div>
    );
};

export default QuotesComponent;