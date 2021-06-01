import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { FormsModule } from '@angular/forms';
//this is typescript import 
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
//http client module
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    // for two way data binding
    FormsModule,
    //for http rest calls
    HttpClientModule,
    //using multiple modules
    //this is angular import to use different class from different view or comonent
    ViewModule
  ],
  // services are declared in providers
  providers: [ TestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
