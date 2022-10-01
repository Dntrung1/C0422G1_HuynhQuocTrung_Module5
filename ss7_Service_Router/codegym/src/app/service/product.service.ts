import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;
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

  constructor(private httpClient: HttpClient) {

  }

  findAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/product");
  }

  create(value: any) {
    return this.httpClient.post("http://localhost:3000/product", value);
  }

  findById(number: number): Observable<any> {
    return this.httpClient.get("http://localhost:3000/product/" + number)
  }

  update(value: any) {
    return this.httpClient.patch("http://localhost:3000/product/" + value.id, value);
  }

  deleteById(number: number) {
    return this.httpClient.delete("http://localhost:3000/product/" + number);
  }
}
