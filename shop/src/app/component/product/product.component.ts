import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/service/sharing.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product;

  constructor(private router:Router,
      private sharingService:SharingService){}

  ngOnInit(){
      this.product = this.sharingService.getProduct();
      console.log(this.product);
  }
}
