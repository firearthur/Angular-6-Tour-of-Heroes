import { Injectable } from '@angular/core';
import Hero from './hero';
import { Observable, of } from 'rxjs';
import MessageService from './messages.service';
import HEROES from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export default class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable <Hero[]> {
    // TODO: add the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
