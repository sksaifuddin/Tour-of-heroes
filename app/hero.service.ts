import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {


  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }


  constructor() { }

}
