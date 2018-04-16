import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  public newMessageText: string = '';

  constructor() { }

  ngOnInit() { }

  public submit(message: string): void {
    // TODO save text to Firebase
    console.log('New message: ', message);
    this.newMessageText = '';
  }

}
