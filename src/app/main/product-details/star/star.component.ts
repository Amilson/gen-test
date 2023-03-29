import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input() set stars(value: number | undefined) {
    this.mappingData(value || 0);
  }

  _labeled = 0;

  _stars = [''];

  constructor() {
    // not to do
  }

  private mappingData(value: number) {
    this._labeled = value;
    this._stars = new Array(Math.trunc(value || 0)).fill('');
  }
}
