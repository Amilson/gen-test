/* eslint-disable no-use-before-define */
import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { getRandomString } from '../../core/utils';

@Component({
  selector: 'gen-c-option',
  template: `
    <div class="gen-option" *ngIf="type === 'select-multiple'">
      <label class="gen-check-container">
        <input type="checkbox" [checked]="value === selected?.value" />
        {{ label }}
        <p class="gen-check-mark"></p>
      </label>
    </div>
    <span
      class="gen-option"
      [ngClass]="{ selected: value === selected?.value }"
      *ngIf="type === 'select'"
      [id]="_id"
    >
      {{ label }}
    </span>
    <label class="gen-radio-container" *ngIf="type === 'radio'">
      <input
        type="radio"
        [value]="selected?.value"
        [checked]="value === selected?.value"
        [id]="_id"
      />
      {{ label }}
      <p class="gen-radio-mark"></p>
    </label>
  `,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => {
        return GenOptionComponent;
      }),
      multi: true
    }
  ]
})
export class GenOptionComponent {
  @Input() type: string = 'select';

  @Input() label: string = '';

  @Input() value: any;

  @Input() selected?: GenOptionComponent | null;

  @Input() enableClick = true;

  @Output() onSelectOption?: Function;

  public _id: string = `gen-option-${getRandomString(10)}`;

  constructor(public elRef: ElementRef) {
    // not to do
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.enableClick) {
      this.onSelectOption?.(this);
    }
  }
}
