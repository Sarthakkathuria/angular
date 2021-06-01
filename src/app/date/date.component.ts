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
  isCollapsed:boolean = true;
  // @Input('name') userName:string="";

  @Input('user') user1!: User;

  
  constructor() { 
    

    // setInterval( ()=>{
    //   let curr = new Date();
    //   this.dateM = curr.toDateString() + ' '+ curr.toLocaleTimeString() ;
    // }, 1000);
  
}
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
    this.user = {
      name : this.user1.name,
      title: this.user1.designation,
      address: this.user1.address,
      phone: this.user1.phone
    };
  }

}

