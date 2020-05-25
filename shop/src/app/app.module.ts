import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { AddressComponent } from './address/address.component';
import { NgxPopper } from 'angular-popper';
import { SidebarComponent } from './component/home/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { CartService } from './service/cart.service';
import { SharingService } from './service/sharing.service';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthService } from './service/auth.service';
import { map, shareReplay, tap } from 'rxjs/operators';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    AddressComponent,
    SidebarComponent,
    AddProductComponent,
    LoginComponent,
    SignupComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ProductService,
              CartService,
              SharingService,
              AuthService 
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
