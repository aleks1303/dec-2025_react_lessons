import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {cartService} from "../../services/api.service.tsx";
import CartComponent from "./CartComponent.tsx";


const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
       if (id) {
           cartService.getCartOfUser(id)
               .then(response => {
                   setCarts(response)
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