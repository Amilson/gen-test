import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() model: any;

  @Output() changeProduct = new EventEmitter<any>();
}
