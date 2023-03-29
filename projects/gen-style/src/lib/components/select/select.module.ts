import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenOptionModule } from '../option';
import { GenSelectComponent } from './select.component';

@NgModule({
  declarations: [GenSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GenOptionModule],
  exports: [GenSelectComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GenSelectModule {}
