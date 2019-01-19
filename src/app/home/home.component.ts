import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizza = 'assets/images/pizza.jpg';

  constructor() { }

  ngOnInit() {
  }

}
