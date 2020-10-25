import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksDetailsComponent } from './component/dashboard/component/drinks/drinks-details/drinks-details.component';
import { DrinksComponent } from './component/dashboard/component/drinks/drinks.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DasboardEffect } from './component/dashboard/store/effects/dashboard.effect';
import { FilterComponent } from './component/filters/component/filter/filter.component';
import { FiltersComponent } from './component/filters/filters.component';
import { FilterEffects } from './component/filters/store/effects/filter.effect';
import { ModelBoxComponent } from './component/model-box/model-box.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { appReducer } from './store/reducers/app.reduce';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    DashboardComponent,
    FilterComponent,
    DrinksComponent,
    DrinksDetailsComponent,
    NavbarComponent,
    ModelBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([FilterEffects, DasboardEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
