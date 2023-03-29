import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent {
  @Input() model = null;
}
