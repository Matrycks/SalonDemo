import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    items:Product[] = [];
    @Output() public ItemAdded = new EventEmitter<number>();

    getItemCount():number{
        return this.items.length;
    }
    addItem(product:Product){
        this.items.push(product);
        this.ItemAdded.emit(this.items.length);
    }
}