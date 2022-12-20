import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CurrencyconversionPipe } from './currencyconversion.pipe';
import { CustompipesComponent } from './custompipes/custompipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    PipesComponent,
    CurrencyconversionPipe,
    CustompipesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule  //to use two way binding we have to include "FormsModule"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
