import {ICart} from "../../models/ICart.ts";
import {FC} from "react";
import ProductComponent from "./ProductComponent.tsx";

type PropsCartsType = {
    item: ICart
}

const CartComponent: FC<PropsCartsType> = ({item}) => {
    return (
        <div>
            {item.products.map(product => <ProductComponent key={product.id} product={product}/>)}
        </div>
    );
};

export default CartComponent;