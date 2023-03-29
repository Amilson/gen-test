import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenButtonModule } from '@gen-style';
import { ContentLayoutComponent } from './content.component';

@NgModule({
  declarations: [ContentLayoutComponent],
  exports: [ContentLayoutComponent],
  imports: [CommonModule, RouterModule, GenButtonModule]
})
export class ContentLayoutModule {}
