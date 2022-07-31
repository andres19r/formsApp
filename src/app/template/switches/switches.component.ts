import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  person = {
    genre: 'F',
    notifications: true,
  }

  termsAndConditions: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
