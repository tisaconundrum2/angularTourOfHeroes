import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // when we import, we are importing with no .ts
import { HEROES } from '../mock-heroes';

@Component({ // Specifying a component that the html and css belong to
  selector: 'app-heroes', // This affects the <app-heroes></app-heroes> selector in src/app/app.component.html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
