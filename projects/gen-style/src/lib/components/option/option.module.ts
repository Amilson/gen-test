import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GenOptionComponent } from './option.component';

@NgModule({
  declarations: [GenOptionComponent],
  imports: [CommonModule],
  exports: [GenOptionComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GenOptionModule {}
