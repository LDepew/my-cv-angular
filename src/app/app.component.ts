import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  name: string = "Lance Depew";
  address: string = "3955 Oxford Millville rd.";
  phone: string = "513-461-4282";
  email: string = "bobvance@fridges.com";

  

  
}


