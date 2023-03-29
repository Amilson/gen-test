import { Component } from '@angular/core';
import { getRandomString } from 'src/app/core/utils';

@Component({
  selector: 'app-shopping-success',
  templateUrl: './shopping-success.component.html',
  styleUrls: ['./shopping-success.component.scss']
})
export class ShoppingSuccessComponent {
  _orderId = getRandomString(8);
}
