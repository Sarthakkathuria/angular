import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { FormsModule } from '@angular/forms';
//this is typescript import 
import { ViewModule } from './view/view.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    // for two way data binding
    FormsModule,
    //using multiple modules
    //this is angular import to use different class from different view or comonent
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
