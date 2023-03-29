import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() model: any;
}
