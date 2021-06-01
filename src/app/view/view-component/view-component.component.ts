import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private http:HttpClient) { }
  userName!:string;
  response!:any;
  ngOnInit(): void {
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }
}
