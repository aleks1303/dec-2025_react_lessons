import {useEffect, useState} from "react";
import {loadAuthProducts} from "../../services/api.service.tsx";
import {IProduct} from "../../models/IProduct.ts";

const AuthResourcesComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts().then(response => {
            setProducts(response)
        })
    }, []);
    return (
        <div>
            {
                products.map(product => (<div>{product.title}</div>))
            }
        </div>
    );
};

export default AuthResourcesComponent;