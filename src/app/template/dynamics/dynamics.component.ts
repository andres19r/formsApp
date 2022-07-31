import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css'],
})
export class DynamicsComponent implements OnInit {
  person: Person = {
    name: 'Andres',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Death Stranding' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  save(): void {
    console.log('posted form');
  }

  delete(index: number): void {
    this.person.favorites.splice(index, 1)
  }
}
