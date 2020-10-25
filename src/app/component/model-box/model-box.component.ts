import { Drink } from './../dashboard/models/drink.model';
import { DashboardSandbox } from './../dashboard/sandbox/dashboard.sandbox';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-model-box',
  templateUrl: './model-box.component.html',
  styleUrls: ['./model-box.component.scss'],
  providers: [MatDialogModule],
})
export class ModelBoxComponent implements OnInit {
  drinkDetail: Drink = null;

  ngOnInit() {
    this.dashboardSandbox.getAllData().subscribe((resData) => {
      this.drinkDetail = resData.selectedDrinkDetails;
    });
  }

  constructor(
    private dashboardSandbox: DashboardSandbox,
    public dialogRef: MatDialogRef<ModelBoxComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
