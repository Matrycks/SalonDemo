import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SearchControl } from '../controls/search.control';
import { ProductListComponent } from './productlist.component';

@Component({
    templateUrl: './productsearch.component.html'
})
export class ProductSearchComponent {
    @Input() productList:ProductListComponent;
    onSearched(val:string){
        //alert(val);
        //debugger;
        //this.productList.searchProducts();
    }
}