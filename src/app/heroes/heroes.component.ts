import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mockheroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
