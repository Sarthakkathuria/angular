import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './date/date.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // to pass the opject we have to create object in typescript file 
  //and then pass it to date  component
  user: User; 
  // we are using for two way data binding using ngModel
  inputText:string = "initial value";
  
  //calling service in app.component way to do that is by using dependency injection
  //for that we have to pass it as a argument to constructor and angular will handle all the backend work of discovering the service
  //and making instance of it
  constructor(private svc : TestService,private http :HttpClient){
    //calling the method of this instance
    svc.printto("Got the service");
    this.user = new User();
    this.user.name = "Sarthak Kathuria";
    this.user.designation = "Software Engineer";
    this.user.address = "New York";
    this.user.phone = ['9968740258' , '996832575'];
  }
  //this http will return a asynchronous call so we can not use let to store variables 
  //in angular we use observables
  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/sarthakkathuria');
    // obs.subscribe(() => console.log('got the response'));
    obs.subscribe((res) => console.log(res));
  }
  
}
