import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ErrorHandler, Injectable, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenStyleModule } from '@gen-style';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localePt);

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService implements ErrorHandler {
  constructor() {
    // not to do
  }

  handleError(error: any) {
    console.log('==> error <==');
    console.log(error);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GenStyleModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: []
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
