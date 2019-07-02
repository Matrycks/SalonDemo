export class Product {
    id:number;
    title:string;
    price:number;
    desc:string;
    imgUrl:string;

    constructor(id:number, title:string, price:number, desc:string, imgUrl:string){
        this.id = id;
        this.title = title;
        this.price = price;
        this.desc = desc;
        this.imgUrl = imgUrl;
    }
}