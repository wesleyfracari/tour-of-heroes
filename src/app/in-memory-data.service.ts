import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', count: 0 },
      { id: 12, name: 'Narco', count: 0 },
      { id: 13, name: 'Bombasto', count: 0 },
      { id: 14, name: 'Celeritas', count: 0 },
      { id: 15, name: 'Magneta', count: 0 },
      { id: 16, name: 'RubberMan', count: 0 },
      { id: 17, name: 'Dynama', count: 0 },
      { id: 18, name: 'Dr IQ', count: 0 },
      { id: 19, name: 'Magma', count: 0 },
      { id: 20, name: 'Tornado', count: 0 }
    ];
    return{heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  

}
