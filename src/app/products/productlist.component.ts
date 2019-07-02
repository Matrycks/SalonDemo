import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { SearchControl } from '../controls/search.control';
import { ShoppingCartService } from '../services/shoppingcart.service';
import * as $ from 'jquery';

@Component({
    selector: 'product-list',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
    products:Product[];
    @Input() public searchBox:SearchControl;
    constructor(private route: ActivatedRoute, private service:ProductService, private cartService:ShoppingCartService){}

    ngOnInit(): void {
        var query = this.route.snapshot.paramMap.get('query');

        this.service.getProducts()
            .subscribe(products => this.products = products);
        
        if(this.searchBox !== undefined){
            this.searchBox.Searched.subscribe((val)=>this.searchProducts(val.toLowerCase()));
            
            if(query !== undefined)
                this.searchProducts(query);
        }
        
        $(window).scroll(function(){
            $('.messageDiv').css('bottom',-window.scrollY);
        });
    }

    searchProducts(val:string){
        if(val=='')return;
        this.products = this.products.filter(function(p) {
            return p.title.toLowerCase().includes(val) || p.desc.toLowerCase().includes(val);
        });
    }
    addToCart(product:Product){
        this.cartService.addItem(product);

        $('.messageDiv').html('<div class="alert alert-primary" role="alert">Item added to cart!</div>');
        $('.alert').fadeOut(2300);
    }
}