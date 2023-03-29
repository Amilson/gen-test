import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenButtonModule } from '@gen-style';
import { FooterLayoutComponent } from './footer.component';

@NgModule({
  declarations: [FooterLayoutComponent],
  exports: [FooterLayoutComponent],
  imports: [CommonModule, RouterModule, GenButtonModule]
})
export class FooterLayoutModule {}
