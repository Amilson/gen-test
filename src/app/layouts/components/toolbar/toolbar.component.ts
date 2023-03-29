import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from '@store/selectors';
import { BaseComponent } from '../../../core/components/base.component';

@Component({
  selector: 'app-toolbar-layout',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarLayoutComponent extends BaseComponent implements OnInit {
  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.__data$ = this.store.select(selectors.shopping.selectResumeQtd());
  }
}
