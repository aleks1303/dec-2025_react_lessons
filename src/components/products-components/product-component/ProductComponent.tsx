import {IProducts} from "../../../models/IProducts.ts";
import {FC} from "react";
import ReviewsProductComponent from "../reviews-components/ReviewsProductComponent.tsx";
import TagComponent from "../tag-component/TagComponent.tsx";

type MyPropsProduct = {
    item: IProducts,
    index: number,


}
const ProductComponent: FC<MyPropsProduct> = ({item, index}) => {
    return (
        <div className={'flex border-1 m-2 p-5'}>
            <div className={'flex-1/5 m-3'}>
                <p>id: {item.id}</p>
                <h3>title: {item.title}</h3>
                <p>brand: {item.brand}</p>
                <p>category: {item.category}</p>
                <p>description: {item.description}</p>
                <p>price: {item.price}</p>
                <img src={item.thumbnail} alt={item.title}/>
            </div>
            <div className={'flex-1/7 m-3'}>
                <p>discountPercentage: {item.discountPercentage}</p>
                <p>rating: {item.rating}</p>
                <p>stock: {item.stock}</p>
                <ul>tags: {item.tags.map((tag, index) => <TagComponent key={index} item={tag}/>)}</ul>
                <p>sku: {item.sku}</p>
                <p>weight: {item.weight}</p>
                <ul>dimensions:
                    <li>width: {item.dimensions.width}</li>
                    <li>height: {item.dimensions.height}</li>
                    <li>depth: {item.dimensions.depth}</li>
                </ul>
            </div>
            <div className={'flex-1/6 m-3'}>
                <p>warrantyInformation: {item.warrantyInformation}</p>
                <p>shippingInformation: {item.shippingInformation}</p>
                <p>availabilityStatus: {item.availabilityStatus}</p>
            </div>
            <div className={'flex-1/5 m-3'}>
                <ReviewsProductComponent key={index} item={item.reviews}/>
            </div>
            <div className={'flex-1/5 m-3'}>
                <p>returnPolicy: {item.returnPolicy}</p>
                <p>minimumOrderQuantity: {item.minimumOrderQuantity}</p>
                <div> Meta:
                    <p>createdAt: {item.meta.createdAt}</p>
                    <p>updatedAt: {item.meta.updatedAt}</p>
                    <p>barcode: {item.meta.barcode}</p>
                    <img src={item.meta.qrCode} alt={'qrCode'}/>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default ProductComponent;

