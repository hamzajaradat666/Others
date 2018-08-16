import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  
  
  

  time = new Date();
  day = this.time.getDate();
  month = this.time.getMonth();
  year = this.time.getFullYear();
 
  constructor(){

  

  }
  
  
}
