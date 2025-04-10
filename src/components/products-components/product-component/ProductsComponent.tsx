import {useEffect, useState} from "react";
import {IProducts} from "../../../models/IProducts.ts";
import {getProducts} from "../../../services/api.fetch.ts";
import ProductComponent from "./ProductComponent.tsx";


const ProductsComponent = () => {
    const [products, setProducts] = useState<IProducts[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products)
        }
        fetchProducts()
    }, []);
    return (
        <div>
            {
                products.map((product) => (<ProductComponent key={product.id} item={product}/>))
            }
        </div>
    );
};

export default ProductsComponent;