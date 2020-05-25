import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private productService:ProductService
            ){}
  
  cartItems:[Product];
  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts()
    .subscribe(
      data => {
        this.cartItems = data.products[0];
        console.log(this.cartItems);
      },
      error => {
        console.log(error);
      }
    )
  }
}
