import {IReviews} from "../../../models/IReviews.ts";
import {FC} from "react";
import ReviewProductComponent from "./ReviewProductComponent.tsx";

type ReviewPropsType = {
    item: IReviews[],
}

const ReviewsProductComponent: FC<ReviewPropsType> = ({item}) => {
    return (
        <>
            {
                item.map((review, index) =>
                    <ReviewProductComponent key={index} review={review}/>)
            }
        </>
    );
};
export default ReviewsProductComponent;

