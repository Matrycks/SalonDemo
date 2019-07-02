import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchControl } from './controls/search.control';
import { ProductSearchComponent } from './products/productsearch.component';
import { ProductListComponent } from './products/productlist.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CartDetailsComponent } from './shoppingcart/cartdetails.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: ProductSearchComponent },
  { path: 'cart', component: CartDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SearchControl,
    ProductSearchComponent,
    ProductListComponent,
    CartDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
