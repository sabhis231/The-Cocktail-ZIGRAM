import { FilterCategory } from './../../models/filterCategory.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input('filter') filter: FilterCategory;
  @Input('filterName') filterName: string;
  @Input('queryFilter') queryFilter: string;

  constructor() {}

  ngOnInit(): void {}
}
