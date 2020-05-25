import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  addToCart(cart:Cart){
    return this.httpClient.post<Cart>(environment.baseUrl + "addtocart",cart);
  }
}
  