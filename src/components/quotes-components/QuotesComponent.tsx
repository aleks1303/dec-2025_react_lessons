import {useEffect, useState} from "react";
import {loadAuthQuotes, refresh} from "../../services/api.service.tsx";
import {IQuote} from "../../models/IQuote.ts";
import QuoteComponent from "./QuoteComponent.tsx";


const QuotesComponent = () => {
    const [quotes, setQuotes] = useState<IQuote[]>([])
    useEffect(() => {
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
    }, []);
    return (
        <div>
            {
                quotes.map(quote => (<QuoteComponent key={quote.id} item={quote}/>))
            }
        </div>
    );
};

export default QuotesComponent;