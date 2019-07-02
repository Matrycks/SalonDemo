import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shoppingcart.service';

@Component({
    selector: 'navbar',
    templateUrl:'./nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    cartItemCount:number = this.shoppingCartService.items.length;
    constructor(private shoppingCartService:ShoppingCartService){}
    ngOnInit(): void {
        this.shoppingCartService.ItemAdded.subscribe((count)=>{
            this.cartItemCount = count;
        });
    }
}