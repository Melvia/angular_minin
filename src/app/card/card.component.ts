import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core"
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
   styleUrls:['./card.component.scss'],
   interpolation: ['{{', '}}']

})

export class CardComponent implements OnInit {
    title: string = 'My Card title';
    text: string = 'My sample text';
    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
    disabled = false;

    ngOnInit() {}
    changeTitle() {
        this.title = "Title has been changed"
    }
    inputHandler(value: any) {
     //   const value = event.target.value;
        this.title = value;
    }


}
