import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArray = []
  constructor() { }

  addToCart(location: {}) {
    this.cartArray.push(location);
    console.log(this.cartArray)
  }

  getcartArray() {
    return this.cartArray;
  }

  getPriceSum() {
    let priceArray = []
    this.cartArray.forEach(e => priceArray.push(e.price))
    let priceSum = priceArray.reduce((a, b) => a + b)
    if ( priceSum <= 200 ) {
      return [priceSum, "No discount"]
    } else if ( priceSum > 500 ) {
      return [priceSum*0.8, "You have a 20% discount"]
    } else return [priceSum*0.9, "You have a 10% discount"]
  }

  clearCart() {
    this.cartArray = [];
    console.log(this.cartArray)
    return this.cartArray;
  }
}
