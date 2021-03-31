import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  jobs: any[] = [
    {
      company: "Courtyard By Marriott",
      location: "Hamilton, OH",
      role: "Assistant Lead Line Cook:",
      duration: "2018 - 2021",
      accomplishments: [
        "Made a lot of food",
        "Generally did food things"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
