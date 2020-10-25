import { Drink } from './../../models/drink.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  @Input('drinks') drinks: Drink[];

  constructor() {}

  ngOnInit(): void {}
}
