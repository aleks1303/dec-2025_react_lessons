import {ICar} from "../../models/ICar.ts";
import {FC} from "react";

type PropsCarType = {
    item: ICar
}

const CarComponent: FC<PropsCarType> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>brand: {item.brand}</p>
            <p>price: {item.price}</p>
            <p>year: {item.year}</p>
            <hr/>
        </div>
    );
};

export default CarComponent;