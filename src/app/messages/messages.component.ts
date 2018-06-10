import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    /**
     * ここの messageServiceは singleton にするために、public アクセスにする(認識あっているかちょっと不安)
     * @param {MessageService} messageService
     */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
