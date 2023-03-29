import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base.component';
import { ShoppingResumeService } from '../providers';

@Component({
  selector: 'app-shopping-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent extends BaseComponent implements OnInit {
  @Output() action = new EventEmitter<any>();

  constructor(private service: ShoppingResumeService) {
    super();
  }

  ngOnInit() {
    this.handleData(this.service);
  }

  onHandleAction(type: string) {
    this.action.next({ type });
  }
}
