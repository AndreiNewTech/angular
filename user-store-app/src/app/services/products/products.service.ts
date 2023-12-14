import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const getLimitedProductsUrl = (limit: number, skip: number) =>
  `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  _products = new Subject<[]>();

  constructor(private http: HttpClient) {}

  get products() {
    return this._products.asObservable();
  }

  getProductUsers(limit: number, skip: number) {
    this.http.get(getLimitedProductsUrl(10, skip)).subscribe((val: any) => {
      this._products.next(val.products);
    });
  }
}
