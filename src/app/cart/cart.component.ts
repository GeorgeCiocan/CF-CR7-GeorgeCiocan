import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bookedLocationsArray: any
  priceSum: any
  constructor(private cartLogic: CartService) { }

  ngOnInit(): void {
    this.bookedLocationsArray = this.cartLogic.getcartArray()
    this.priceSum = this.cartLogic.getPriceSum()
  }

  ngOnChanges() {
    this.bookedLocationsArray = this.cartLogic.getcartArray()
    this.priceSum = this.cartLogic.getPriceSum()
  }

  emptyCart() {
    this.bookedLocationsArray = this.cartLogic.clearCart()
  }

  removeTrip(location: {}) {
    this.bookedLocationsArray = this.cartLogic.removeFromCart(location)
    this.priceSum = this.cartLogic.getPriceSum()
  }
}
