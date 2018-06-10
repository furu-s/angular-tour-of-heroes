import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { MessageService } from './message.service';

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
    constructor(public messageService: MessageService) {
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
}
