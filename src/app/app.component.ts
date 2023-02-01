import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number = 0;

  incrementHandler() {
    this.number++;
  }

  decrementHandler() {
    this.number--;
  }

  plusNumberHandler(number: number) {
    this.number += number;
  }

  minusNumberHandler(number: number) {
    this.number -= number;
  }
}
