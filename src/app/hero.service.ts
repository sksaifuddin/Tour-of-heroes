import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class HeroService {


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetched data');
    return of(HEROES);
  }




  constructor(private messageService: MessageService ) { }


  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
