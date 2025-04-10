import {IReviews} from "../../../models/IReviews.ts";
import {FC} from "react";

type MyPropsReview = {
    review: IReviews
}
const ReviewProductComponent:FC<MyPropsReview> = ({review}) => {
    return (
        <div>
            <p>rating: {review.rating}</p>
            <p>comment: {review.comment}</p>
            <p>date: {review.date}</p>
            <p>reviewerName: {review.reviewerName}</p>
            <p>reviewerEmail: {review.reviewerEmail}</p>
        </div>
    );
};

export default ReviewProductComponent;