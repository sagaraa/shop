import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private product:Product = undefined;

    setProduct(product:any){
        this.product = product;
    }

    getProduct():any{
        return this.product;
    }

  constructor() { }
}
