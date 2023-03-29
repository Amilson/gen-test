import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GenStyleGenSettingsService } from './core/services/settings/gen-style-settings.service';
import { GenStyleGenThemeSettingsService } from './core/services/settings/gen-style-theme-settings.service';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  providers: [GenStyleGenSettingsService, GenStyleGenThemeSettingsService]
})
export class GenStyleModule {}
