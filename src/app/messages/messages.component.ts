import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // The message service must be public because we're going to bind it in the
  // template.
  // Angular only binds to public component properties.
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
