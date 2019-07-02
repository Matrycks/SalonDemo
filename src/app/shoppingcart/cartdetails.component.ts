import {Component, OnInit} from '@angular/core';
import { ShoppingCartService } from '../services/shoppingcart.service';
import { Product } from '../models/product.model';

@Component({
    templateUrl:'./cartdetails.component.html',
    styleUrls:['./cartdetails.component.css']
})
export class CartDetailsComponent implements OnInit {
    items:Product[];
    constructor(private cartService:ShoppingCartService){}

    ngOnInit(): void {
        this.items = this.cartService.items;
    }
}