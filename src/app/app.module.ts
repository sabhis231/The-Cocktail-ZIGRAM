import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
