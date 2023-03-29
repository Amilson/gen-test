import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GenButtonComponent } from './button.component';

@NgModule({
  declarations: [GenButtonComponent],
  imports: [CommonModule],
  exports: [GenButtonComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GenButtonModule {}
