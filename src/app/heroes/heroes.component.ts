import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[];

  public constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    }, (error: Error) => {
      console.log(error);
    });
  }

  public deleteHero(id: number): void {
    this.heroService.deleteHeroes(id).subscribe((res: any) => {
      console.log(res);
      this.getHeroes();
    }, (error: Error) => {
      console.log(error);
    });
  }
}
