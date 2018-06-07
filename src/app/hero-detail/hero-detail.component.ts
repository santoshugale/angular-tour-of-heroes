import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() public hero: Hero;

  public constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  public ngOnInit(): void {
    this.getHero();
  }

  public goBack(): void {
    this.location.back();
  }

  private getHero(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.heroService.getHero(+params.get('id'))
        .subscribe(hero => this.hero = hero)
    })
  }

}
