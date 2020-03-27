import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { InMemoryDataService } from '../in-memory-data.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  
  async count(hero: Hero){
    let c = hero.count++;
    this.heroService.counts(hero)
      .then((result) => {
        console.log("Resultado Promise");
      })
      .catch((error) => {
        console.log("Erro ao tratar dados", error);
      });
      try {
        let result= await this.heroService.counts(hero);
        console.log("Após função", result);
      } catch (error) {
        console.log(error);
      }
   
   
    //this.heroService.counts(c);
    return "result";
 }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as unknown as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      }); 
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}