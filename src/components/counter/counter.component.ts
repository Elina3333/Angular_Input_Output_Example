import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();
  @Output() plusNumber = new EventEmitter<number>();
  @Output() minusNumber = new EventEmitter<number>();
  @Input() message: string = '';

  incrementEmitter() {
    this.increment.emit()
  }

  decrementEmitter() {
    this.decrement.emit();
  }

  plusNumberEmitter(number: number) {
    this.plusNumber.emit(number);
  }

  minusNumberEmitter(number: number) {
    this.minusNumber.emit(number);
  }
}
