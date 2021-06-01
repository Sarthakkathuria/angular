import { Injectable } from '@angular/core';

// injectable tells angular that it is service 
@Injectable({
  providedIn: 'root'
})
export class TestService {

  printto(arg: any){
    console.log(arg);
  }  
  constructor() { }
}
