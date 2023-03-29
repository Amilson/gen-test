/* eslint-disable no-use-before-define */
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getRandomString } from '../../core/utils';
import { GenOptionComponent } from '../option';

@Component({
  selector: 'gen-c-select',
  template: `
    <gen-form-field [id]="_id" [ngClass]="{ disabled: _disabled }">
      <gen-form-field-header>
        <label>
          {{ label }}
        </label>
        <helper>
          {{ helperMessage }}
        </helper>
      </gen-form-field-header>
      <gen-form-field-body (click)="open()" [class.error]="errorMessage?.trim()">
        <gen-select class="trigger" [ngClass]="{ open: _opened }">
          <gen-select__trigger>
            <span>
              {{ _selected?.label || labelSelect }}
            </span>
          </gen-select__trigger>
        </gen-select>
      </gen-form-field-body>
      <gen-select-inside [ngClass]="{ open: _opened }">
        <gen-select-options #selectOptions>
          <ng-content> </ng-content>
        </gen-select-options>
      </gen-select-inside>
      <gen-form-field-footer>
        <info>
          {{ infoMessage }}
        </info>
        <error>
          {{ errorMessage }}
        </error>
      </gen-form-field-footer>
    </gen-form-field>
  `,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => {
        return GenSelectComponent;
      }),
      multi: true
    }
  ]
})
export class GenSelectComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() label?: string;

  @Input() helperMessage?: string;

  @Input() placeholder?: string;

  @Input() infoMessage?: string;

  @Input() errorMessage?: string;

  @Input() labelSelect = 'Selecione';

  @Input() onHandleOptions = new EventEmitter<any>();

  @Output() onChange = new EventEmitter<any>();

  @ViewChild('selectOptions', { static: true })
  selectOptions?: ElementRef;

  private handledValue: any;

  private onModelChange = (value: any) => {};

  private onModelTouched = (value: any) => {};

  @ContentChildren(GenOptionComponent)
  private options!: QueryList<GenOptionComponent>;

  public _selected?: GenOptionComponent | null;

  public _opened: boolean = false;

  public _id: string = `gen-select-${getRandomString(10)}`;

  public _disabled: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {
    // not to do
  }

  private onHandleSelected() {
    const { _opened, _selected } = this;
    this.options.forEach((op) => {
      op.selected = _selected;
    });
    if (_opened) {
      let scrollValue = 0;
      if (_selected) {
        const { _id } = _selected;
        scrollValue = document.getElementById(_id)?.offsetTop || 0;
      }
      this.selectOptions?.nativeElement?.scrollTo(0, scrollValue);
      this.selectOptions?.nativeElement?.focus();
      this.cdRef.detectChanges();
    }
  }

  private validateOptions() {
    if (!this.options) return;
    this.options.forEach((op) => {
      op.onSelectOption = this.onSelectOption.bind(this);
      op.type = 'select';
      op.selected = null;
      if (`${op.value}`.toLowerCase() === `${this.handledValue}`.toLowerCase()) {
        this._selected = op;
        op.selected = op;
      }
    });
  }

  private init() {
    setTimeout(() => {
      this._selected = null;
      this.validateOptions();
    }, 0);
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  @Input()
  set value(value: any) {
    if (value !== undefined && this.handledValue !== value) {
      this.handledValue = value;
      this.onModelChange(value);
      this.onModelTouched(value);
    }
    this.validateOptions();
  }

  get value(): any {
    return this.handledValue;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onChangeValue(event: any, value: any) {
    event?.preventDefault();
    event?.stopPropagation();
    this.writeValue(value);
    this.onChange.next(value);
  }

  @HostListener('document:click')
  clickout() {
    this._opened = false;
  }

  open() {
    if (!this._opened) {
      setTimeout(() => {
        this._opened = true;
        this.onHandleSelected();
      }, 50);
    }
  }

  ngOnInit() {
    this.init();
    this.onHandleOptions.subscribe(() => {
      this.init();
    });
  }

  ngOnChanges() {
    this.init();
  }

  onSelectOption(select: GenOptionComponent) {
    this._selected = select;
    const { value } = select;
    this._opened = false;
    this.onChangeValue(null, value);
    this.onHandleSelected();
  }
}
