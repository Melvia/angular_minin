import { Component } from '@angular/core';

export interface Card {
  title: string;
  text:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  toggle=true;
  cards : Card[] = [
    {title: 'Card1', text: 'This is card number 1'},
    {title: 'Second Card2', text: 'This is card number 2'},
    {title: 'Last card', text: 'This is card number 3'},
    {title: 'Fourth Card2', text: 'This is card number 4'},
    {title: '5th card', text: 'This is card number 3'}
  ];
  ToggleCards() {
    this.toggle = !this.toggle;

  }
}
