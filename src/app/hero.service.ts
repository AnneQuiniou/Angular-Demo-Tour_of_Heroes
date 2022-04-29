import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mockheroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes$(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
