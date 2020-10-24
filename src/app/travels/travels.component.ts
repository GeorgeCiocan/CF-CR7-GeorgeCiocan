import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { destinations } from "../destinations"

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  locationsArray:any = destinations
  constructor(private cartLogic: CartService) { }
  bookTrip(location: {}) {
    this.cartLogic.addToCart(location)
  }
  ngOnInit(): void {
  }
}
