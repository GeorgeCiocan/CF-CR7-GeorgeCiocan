import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations } from '../destinations'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    console.log(params)
    this.location = destinations[+params.get('name')];
    });
  }
}
