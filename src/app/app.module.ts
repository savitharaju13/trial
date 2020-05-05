import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoancomponentComponent } from './loancomponent/loancomponent.component';
import { PersonalComponent } from './loancomponent/personal/personal.component';
import { HomeComponent } from './loancomponent/home/home.component';
import { CarComponent } from './loancomponent/car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    LoancomponentComponent,
    PersonalComponent,
    HomeComponent,
    CarComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
