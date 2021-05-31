import { Component } from '@angular/core';
import { User } from './date/date.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // to pass the opject we have to create object in typescript file 
  //and then pass it to date  component
  user: User; 
  constructor(){
    this.user = new User();
    this.user.name = "Sarthak Kathuria";
    this.user.designation = "Software Engineer";
    this.user.address = "New York";
    this.user.phone = ['9968740258' , '996832575'];
  }
}
