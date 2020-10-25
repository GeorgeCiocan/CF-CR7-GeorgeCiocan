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

  removeFromCart (location: any) {
    // console.log(location)
    // console.log(this.cartArray.findIndex( item => item === location ))
    let index = this.cartArray.findIndex( item => item === location )
    /* finds the index of the object that needs to be removed from the cartArray */
    this.cartArray.splice(index, 1)
    return this.cartArray
  }

  getcartArray() {
    return this.cartArray;
  }

  getPriceSum() {
    let priceArray = []
    this.cartArray.forEach(element => priceArray.push(element.price))
    let priceSum = priceArray.reduce((a, b) => a + b)
    if (priceSum <= 200) {
      return [priceSum, "No discount"]
    } else if (priceSum > 500) {
      return [priceSum * 0.8, "You have a 20% discount"]
    } else return [priceSum * 0.9, "You have a 10% discount"]
  }

  clearCart() {
    this.cartArray = [];
    return this.cartArray;
  }
}
