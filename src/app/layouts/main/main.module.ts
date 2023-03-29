import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterLayoutModule, ToolbarLayoutModule } from '../components';
import { ContentLayoutModule } from '../components/content';
import { MainLayoutComponent } from './main.component';

@NgModule({
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContentLayoutModule,
    ToolbarLayoutModule,
    FooterLayoutModule
  ]
})
export class MainLayoutModule {}
