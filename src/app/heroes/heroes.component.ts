import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    /**
     * シンプルな初期化のみを行うべきであって、HTTP リクエストを投げるとかしたらダメだよって公式ドキュメントに書いてあった
     ここで getHeroes を叩くのはアンチパターン！

     While you could call getHeroes() in the constructor, that's not the best practice.
     *
     * @param {HeroService} heroService
     */
    constructor(private heroService: HeroService) {
    }

    selectedHero: Hero;
    heroes: Hero[];

    /**
     * Lifecycle
     */
    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    /**
     * this.heroService.getHeroes() は Observable 型なので、
     * subscribeする
     *
     * GoFのデザインパターンの Publish-Subscribe にあたるもの。
     *
     */
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
