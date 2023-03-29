import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() order = new EventEmitter<any>();

  _order = [
    {
      label: 'Price - Expensive/Cheap',
      value: JSON.stringify({
        field: 'price',
        type: 'number',
        direction: 'desc'
      })
    },
    {
      label: 'Price - Cheap/Expensive',
      value: JSON.stringify({
        field: 'price',
        type: 'number',
        direction: 'asc'
      })
    },
    {
      label: 'Stars - More/Less',
      value: JSON.stringify({
        field: 'ratting',
        type: 'number',
        direction: 'desc'
      })
    },
    {
      label: 'Stars - Less/More',
      value: JSON.stringify({
        field: 'ratting',
        type: 'number',
        direction: 'asc'
      })
    }
  ];

  onChangeOrder(event: any) {
    this.order.next(event);
  }
}
