import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent {
  @Input() sizes?: any[];

  @Output() selectedSize = new EventEmitter<any>();

  _selectedSize: number = 0;

  constructor() {
    // not to do
  }

  onChooseSize(size: number) {
    this._selectedSize = size;
    this.selectedSize.next(size);
  }
}
