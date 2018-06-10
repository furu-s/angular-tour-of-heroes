import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

    /**
     *
     * @param {ActivatedRoute} route URLからidを抽出する
     * @param {HeroService} heroService idからheroを取得する
     * @param {Location} location ブラウザバックするときに使う
     */
  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location
              ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // + にすることで string → number にキャスト
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
