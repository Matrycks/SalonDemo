import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

const productList:Product[] = [
    new Product(1, 'Virgin Brazilian Natural Straight Human Hair', 52.00, 'hair', 'https://images-na.ssl-images-amazon.com/images/I/71gXg64AyfL._SX522_.jpg'),
    new Product(2, 'Dazzling Weave Raw Vietnamese Hair - Womens Wig', 150.95, '', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTijQ-E1x9R4Tis-P4TqYI0V_swNuKeK39ANDCkrmASfdPnBnm6HZE_J9aRs1LPV9NzoyGhuTlW_tDTQsaAkPN1L_nDx3flntCYJZaTElKGrGITaID5QqRh5Q&usqp=CAE'),
    new Product(3, 'Ombre Hair Weave Body Wave', 125.51, '', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNOjQJPA_kj8rvln2Se8uBzXnV-CuP1CJ92lx4IQZAwApaTabLTTQFkUs45MOKoABUL1JYl1mMevFlk-ovut0xX7sviqMk0TDDef7GANf-nwOiMRBsVIjoqw&usqp=CAE'),
    new Product(4, 'Curly Indian Hair Bundle Deal-Bundle', 246.00, '', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQypCif-K6ahKwjSyjUqx7SUuQFm94ywJZVR2to6k3L7iDMKFhkWqE3-tQjLHe9pMXTueZX3w4a2KimSYZ3NAREQh52rQKPnOCgZ6TY2kQg&usqp=CAE'),
    new Product(5, 'Brazilian Straight Hair Burgundy Human Hair', 61.00, '', 'https://images-na.ssl-images-amazon.com/images/I/411lyNsr6jL.jpg'),
    new Product(6, 'Ali Moda Malaysian Virgin Hair', 61.00, '', 'https://images-na.ssl-images-amazon.com/images/I/71xVpTcO29L._SX522_.jpg'),
    new Product(7, 'Ombre Brazilian Hair Body Wave', 67.00, '', 'https://images-na.ssl-images-amazon.com/images/I/71X1j4%2BqPqL._SX522_.jpg'),
    new Product(8, 'Bundles Ombre Brazilian Hair Extensions', 29.99, '', 'https://images-na.ssl-images-amazon.com/images/I/71rJTMWFRVL._SX522_.jpg'),
    new Product(9, 'Emmet 8Inch Brazilian Loose Wave Spring Curly Hair Weaves', 15.60, '', 'https://images-na.ssl-images-amazon.com/images/I/71oUHo6DcIL._SX522_.jpg')
];

@Injectable({
    providedIn: 'root'
})
export class ProductService implements OnInit {
    products:Observable<Product[]> = of(productList);
    ngOnInit(): void {
        
    }

    getProducts():Observable<Product[]>{
        return this.products;
    }
}