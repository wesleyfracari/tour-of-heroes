import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => {
        let order = heroes.sort((a, b) => {
          if (a.count < b.count) {
            return 1
          } else if (a.count > b.count){
            return -1
          }else return 0
        });
        this.heroes = order.slice(0, 4)
      });
  }
  count(hero: Hero) {
    hero.count++;
    this.heroService.counts(hero);
  }
}