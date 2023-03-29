import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetails } from 'src/app/interfaces';

@Component({
  selector: 'app-product-details-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  @Input() model?: ProductDetails;

  @Output() addToCart = new EventEmitter<any>();

  _images = [];

  _selected = '1';

  _selectedSize = 0;

  constructor() {
    // not to do
  }

  onSelectedSize(size: number) {
    this._selectedSize = size;
  }

  onHandleAddToCart() {
    const { _selectedSize, model } = this;
    this.addToCart.next({
      size: _selectedSize,
      id: model?.id
    });
  }
}
