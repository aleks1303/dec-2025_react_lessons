import {IProducts} from "../../models/IProduct.ts";
import {FC} from "react";

type PropsProductType = {
    product: IProducts
}

const ProductComponent: FC<PropsProductType> = ({product}) => {
    return (
        <div>
            {product.id}. {product.title} {product.price}
        </div>
    );
};

export default ProductComponent;