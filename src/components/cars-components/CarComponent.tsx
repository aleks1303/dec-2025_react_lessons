import {ICar} from "../../models/ICar.ts";
import {FC} from "react";

type PropsCarType = {
    item: ICar
}

const CarComponent:FC<PropsCarType> = ({item}) => {
    return (
        <div>
            <p>id. {item.id}</p>
            <p> {item.brand}</p>
            <p>Price:{item.price}</p>
            <p>Year:{item.year}</p>
            <hr/>
        </div>
    );
};

export default CarComponent;