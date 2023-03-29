import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  @Input() model: any;

  @Output() action = new EventEmitter<any>();

  constructor() {
    // not to do
  }

  onHandleAction(type: string) {
    const { model } = this;
    this.action.next({ model, type });
  }
}
