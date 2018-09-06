import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {

  public hero: Hero = new Hero();

  public constructor(private heroService: HeroService,
    private location: Location) { }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.heroService.addHero(this.hero).subscribe(() => {
      this.location.back();
    });
  }
}
