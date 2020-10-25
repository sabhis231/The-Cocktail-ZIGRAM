import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drink } from './../../../models/drink.model';
@Component({
  selector: 'app-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss'],
})
export class DrinksDetailsComponent implements OnInit {
  @Input('data') data: Drink;
  @Output('selectedDrink') selectedDrink = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  selectDrink(drinkId) {
    this.selectedDrink.emit(drinkId);
  }
}
