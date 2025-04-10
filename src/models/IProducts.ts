import {IDimensions} from "./IDemensions.ts";
import {IReviews} from "./IReviews.ts";
import {IMeta} from "./IMeta.ts";


export interface IProducts {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMeta;
  images: string[];
  thumbnail: string;
}