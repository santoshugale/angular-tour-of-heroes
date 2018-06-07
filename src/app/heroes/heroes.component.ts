import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private selectedHero: Hero;
  private heroes: Hero[] = HEROES;

  public constructor() { }

  public ngOnInit(): void {
  }

  public onHeroSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
