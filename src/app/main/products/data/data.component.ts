import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  @Input() model: any;

  constructor(private router: Router) {
    // not to do
  }

  @HostListener('click')
  onClick() {
    const { id } = this.model;
    this.router.navigate([`/product/details/${id}`]);
  }
}
