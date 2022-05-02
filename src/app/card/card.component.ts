import { style } from "@angular/animations";
import { Component, OnInit, Input } from "@angular/core"
import { Card } from "../app.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
   styleUrls:['./card.component.scss'],
   interpolation: ['{{', '}}']

})

export class CardComponent implements OnInit {

    @Input() card : Card = {title: '', text:''};
    @Input() index: number=0;
    title: string = 'My Card title';
    text: string = 'My sample text';

    cardDate: Date = new Date();
    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
    disabled = false;
    textColor: string = "";
    ngOnInit() {}
    changeTitle() {
        this.card.title = "Title has been changed"
    }
    inputHandler(value: any) {
     //   const value = event.target.value;
        this.title = value;
    }
    changeHandler(){
        console.log(this.title)
    }

  


}
