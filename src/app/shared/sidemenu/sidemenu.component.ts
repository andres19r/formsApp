import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  templateMenu: MenuItem[] = [
    { text: 'Basics', route: './template/basics' },
    { text: 'Dynamics', route: './template/dynamics' },
    { text: 'Switches', route: './template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { text: 'Basics', route: './reactive/basics' },
    { text: 'Dynamics', route: './reactive/dynamics' },
    { text: 'Switches', route: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    { text: 'Register', route: './auth/register'},
    { text: 'Login', route: './auth/login'}
  ]
  constructor() {}

  ngOnInit(): void {}
}
