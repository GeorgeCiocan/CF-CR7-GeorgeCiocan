import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { destinations } from '../destinations'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location: any
  constructor(private route: ActivatedRoute, private cartLogic: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    // console.log(params)
    // this.location = destinations[+params.get('name')];
    this.location = destinations.find(trip => trip.destination === params.get('name') )
    //replaced default angular asignment to return the the object in respect to the "destination" key, passed through the slug, and not through the obejcts index 
    });
  }
  bookTrip(location: {}) {
    this.cartLogic.addToCart(location)
  }
}
