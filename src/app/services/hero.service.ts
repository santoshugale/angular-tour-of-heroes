import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { MessagesService } from './messages.service';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public constructor(private httpClient: HttpClient,
    private messageService: MessagesService) { }

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.httpClient.get<Hero[]>('http://localhost:3000/heroes');
    // TODO find way to change _id to id
    // return of(HEROES);  // return the observable
  }

  public getHero(heroId: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return this.httpClient.get<Hero>('http://localhost:3000/hero/' + heroId);
    // return of(HEROES.find((hero: Hero) => {
    //   return hero._id == id;
    // }))
  }
}
