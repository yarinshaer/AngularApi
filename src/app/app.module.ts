import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewCustomerComponent } from './components/add-new-customer/add-new-customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NextCustomerComponent } from './components/next-customer/next-customer.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewCustomerComponent,
    NextCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
