import {useEffect, useState} from "react";
import {ICart} from "../../models/cart-models/ICart.ts";
import {useParams} from "react-router-dom";
import {ICartGeneral} from "../../models/cart-models/ICartGeneral.ts";
import {serviceApi} from "../../services/api.service.tsx";
import CartComponent from "./CartComponent.tsx";


const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if (id) {
            serviceApi.getCartsOfUser(+id)
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