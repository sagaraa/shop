import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient:HttpClient,
              // private products:Product   never do that
              ) { }
  getAllProducts(){
    return this.httpClient.get<any>(environment.baseUrl+"products");
  }

  addProduct(data:any){
    console.log(data,"product recieved in service class");
    return this.httpClient.post<Product >(environment.baseUrl+"products",data);
  }

  
  getCategoryList(){
    return this.httpClient.get<any>(environment.baseUrl+"categories");
  }
}
