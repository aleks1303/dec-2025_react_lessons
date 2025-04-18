import {ICart} from "../../models/carts-models/ICart.ts";
import {FC} from "react";

type PropsCartType = {
    item: ICart
}

const CartComponent:FC<PropsCartType> = ({item}) => {
    return (
        <div>
            <div>{item.products.map(product => (<div key={product.id}>{product.title}</div>))}</div>
        </div>
    );
};

export default CartComponent;