import { Component } from '@angular/core';
import { GenStyleGenSettingsService } from '@gen-style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gen-test';

  constructor(private stylesService: GenStyleGenSettingsService) {
    this.stylesService.bootstrap('');
  }
}
