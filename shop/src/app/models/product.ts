export class Product {
    constructor(
        public name:string,
        public categories:string[],
        public imageUrl:string,
        public writer:string,
        public price: number,
        public description:string
    ){

    }
}

