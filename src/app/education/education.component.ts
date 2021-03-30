import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools: any[] = [
    {
      name: "Max Technical Training",
      accomplishment: "technologies",
      year: "2021",
    },
    {
      name: "Miami University Hamilton",
      accomplishment: "Studies",
      year: "2005",
    },
    {
      name: "Talawanda High School",
      accomplishment: "Basic",
      year: "2003",
    },
  ]

  technologies: string[] = ["git", "gitHub", "Java", "SQL"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
