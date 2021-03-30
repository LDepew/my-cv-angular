import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  name: string = "Lance";
  address: string = "2514 hartshore rd.";
  phone: string = "555-515-2837";
  email: string = "bobvance@fridges.com";

  
  showPersonal = null;
  

  togglePersonal(): void{
    this.showPersonal = true;
  }
  
}


