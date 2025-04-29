import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.tsx";
import {IProduct} from "../../models/IProduct.ts";

const AuthResourcesComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts().then(response => {
            setProducts(response)
        }).catch( reason => {
            console.log(reason);
            refresh().then(() => loadAuthProducts().then(response => {
                    setProducts(response)
                })
            )
        })
    }, []);
    return (
        <div>
            {
                products.map(product => (<div key={product.id}>{product.title}</div>))
            }
        </div>
    );
};

export default AuthResourcesComponent;