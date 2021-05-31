import { Component, OnInit ,Input} from '@angular/core';
import {User} from './date.model'
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  // dateM: string = 'ss';
  user:any;
  // @Input('name') userName:string="";

  @Input('user') user1!: User;

  
  constructor() { 
    

    // setInterval( ()=>{
    //   let curr = new Date();
    //   this.dateM = curr.toDateString() + ' '+ curr.toLocaleTimeString() ;
    // }, 1000);
  
}
  ngOnInit(): void {
    this.user = {
      name : this.user1.name,
      title: 'Software developer',
      address: 'kendy ,NY',
      phone: ['9968930964','9968893047']
    }
  }

}

