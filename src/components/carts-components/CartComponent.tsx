import {ICart} from "../../models/cart-models/ICart.ts";
import {FC} from "react";

type PropCartType = {
    item: ICart
}
const CartComponent: FC<PropCartType> = ({item}) => {
    return (
        <div>
            <div>{item.total}</div>
        </div>
    );
};

export default CartComponent;