import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools: any[] = [
    {
      name: "Miami University Hamilton",
      accomplishment: "Studies",
      years: "2005",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
