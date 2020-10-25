import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Drink } from './../dashboard/models/drink.model';
import { DashboardSandbox } from './../dashboard/sandbox/dashboard.sandbox';

@Component({
  selector: 'app-model-box',
  templateUrl: './model-box.component.html',
  styleUrls: ['./model-box.component.scss'],
  providers: [MatDialogModule],
})
export class ModelBoxComponent implements OnInit {
  sub: Subscription[] = [];
  drinkDetail: Drink = null;

  constructor(
    private dashboardSandbox: DashboardSandbox,
    public dialogRef: MatDialogRef<ModelBoxComponent>
  ) {}

  ngOnInit() {
    this.sub.push(
      this.dashboardSandbox.getAllData().subscribe((resData) => {
        this.drinkDetail = resData.selectedDrinkDetails;
      })
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.sub.forEach((s) => s.unsubscribe());
  }
}
