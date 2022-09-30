import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product ;
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  constructor() {

  }

  findAll() {
    return this.products;
  }

  create(value: any) {
    this.product = null;
    this.product = value;
    for (let i = 0; i < this.products.length; i++) {
      this.product.id = this.products[this.products.length-1].id + 1;
    }
    console.log(this.product)
    this.products.push(this.product)
  }

  findById(number: number) {
    return this.products.filter(prd => prd.id === number)[0];
  }

  update(value: any) {
    this.product = null;
    this.product = value;
    for (let i = 0; i < this.products.length; i++) {
        if (this.product.id === this.products[i].id){
          this.products[i].name = this.product.name
          this.products[i].price = this.product.price
          this.products[i].description = this.product.description
        }
    }
  }

  deleteById(number: number) {
    this.product = null;
    this.product = this.products.filter(prd => prd.id === number)[0];
    for (let i = 0; i < this.products.length; i++) {
      if (this.product.id === this.products[i].id){
        this.products.splice(i,1)
      }
    }
  }
}
