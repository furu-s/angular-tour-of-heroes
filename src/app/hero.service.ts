import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    /**
     * Service に他の Service を注入することはよくあること。
     *
     * This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
     *
     */
    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    /**
     * 非同期通信に対応するために
     * Observable型にする
     * of がObservable型を返す
     * @returns {Observable<Hero[]>}
     */
    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetche hereos');
        return of(HEROES);
    }

    getHero(id): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id ))
    }
}
