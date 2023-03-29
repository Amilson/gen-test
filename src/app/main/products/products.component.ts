import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../core/components/base.component';
import { ProductsService } from './providers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(private service: ProductsService) {
    super();
  }

  ngOnInit() {
    this.handleData(this.service);
  }

  onHandleOrder(event: any) {
    this.service.order(event);
  }
}
