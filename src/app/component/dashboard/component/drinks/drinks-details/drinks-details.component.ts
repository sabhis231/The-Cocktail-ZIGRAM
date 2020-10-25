import { Drink } from './../../../models/drink.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss'],
})
export class DrinksDetailsComponent implements OnInit {
  @Input('data') data: Drink;

  constructor() {}

  ngOnInit(): void {}
}
