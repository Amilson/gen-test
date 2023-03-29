import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../core/components/base.component';
import { ShoppingService } from './providers';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent extends BaseComponent implements OnInit {
  constructor(private service: ShoppingService) {
    super();
  }

  ngOnInit() {
    this.handleData(this.service);
  }

  onHandleAction(event: any) {
    this.service.action(event);
  }
}
