import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Drink } from './../../models/drink.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  @Input('drinks') drinks: Drink[];
  @Input('isEmpty') isEmpty: boolean;
  @Input('filterCode') filterCode: string;
  @Output('selectedDrink') selectedDrink = new EventEmitter<string>();
  searchBox = '';

  constructor() {}

  ngOnInit(): void {
    
  }

  selectDrink(drinkId) {
    this.selectedDrink.emit(drinkId);
  }
}
