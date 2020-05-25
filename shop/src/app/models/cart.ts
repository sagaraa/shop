import { Product } from "./product";

export class Cart{
    constructor(
        public product:Product,
        public quantity:number,
        public amount:number,
        public deliveryDate:Date,
    ){
    }

}