import { Component, OnInit } from '@angular/core';
import { ProductDetailsAddToCart } from 'src/app/interfaces';
import { BaseComponent } from '../../core/components/base.component';
import { ProductDetailsService } from './providers';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent extends BaseComponent implements OnInit {
  constructor(private service: ProductDetailsService) {
    super();
  }

  ngOnInit() {
    this.handleData(this.service);
  }

  onHandleAddToCart(event: ProductDetailsAddToCart) {
    this.service.addToCart(event);
  }

  onChangeProduct(type: string) {
    this.service.changeProduct(type);
  }
}
