import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/service/sharing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // itemList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  products:[Product];
  cart:Cart;
  selectedProduct:Product;
  cartProduct:Product;
  constructor(private httpClient: HttpClient,
              private productService:ProductService,
              private cartService:CartService,
              private router:Router,
              private sharingService:SharingService

    ) { }
    ngOnInit() {
      this.getAllProducts();     
    }
    getAllProducts(){
    this.productService.getAllProducts().subscribe(
      data =>  {
        this.products = data.products[0];
        console.log(this.products.length);
      },
      error => console.log(error)    
    )
  }
  addToCart(selection:Product){

    this.cartProduct = selection;
    console.log("clicked !!", this.cartProduct);

    this.cart.product = this.cartProduct;
    this.cart.quantity =+1;
    this.cart.amount = this.cart.product.price*this.cart.quantity;
    this.cart.deliveryDate = new Date(); 
    this.cart.deliveryDate.setDate(this.cart.deliveryDate.getDate()+7);
    this.cartService.addToCart(this.cart).subscribe(
      data => {
            console.log("success !!!!", data);
      },
      error => {
            console.log("error !!!", error);
      }
    )
  }

    // constructor(,
    //     private sharingService:SharingService){}

    changeComponent(url:string, selection:Product){
        console.log(selection);
        this.sharingService.setProduct(selection);
        this.router.navigate([url]);//redirects url to new component
    }
}
