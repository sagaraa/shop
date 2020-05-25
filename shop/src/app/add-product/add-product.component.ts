import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dropdownList : string[];
  selectedItems: string[];
  dropdownSettings = {};
  constructor(private  formBuilder:FormBuilder,
              private router: Router,
              private productService: ProductService
              ) { }
    addProductForm = this.formBuilder.group({
    name:[],
    imageUrl:[],
    writer:[],
    price:[] ,
    description:[]
})
product:Product;
onSubmit(){
  this.product = this.addProductForm.value;
  // var data = stringify(this.product);
  this.product.categories = this.selectedItems;
  var data = this.product;
  this.productService.addProduct(this.product)
  .subscribe(
    data => console.log("Success !!!!", data),
    error => console.log("errorrr !!!!!",error)
  )
  }
  ngOnInit() {
    this.getCategoryList();
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  getCategoryList(){
    this.productService.getCategoryList().subscribe(
      data => {
        this.dropdownList = data.categories['0'].categories;
        console.log(data.categories['0'].categories);
        
      },
      error => {
        console.log(error);
        
      }
    )
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
