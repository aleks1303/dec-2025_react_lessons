import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/carts-models/ICart.ts";
import {ICartGeneral} from "../../models/carts-models/ICartGeneral.ts";
import CartComponent from "./CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";


const CartsComponent = () => {
    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartGeneral) => {
                    setCarts(carts)
                });
        }
    }, [id]);
    return (
        <div>
            {
                carts.map(cart => <CartComponent key={cart.id} item={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;