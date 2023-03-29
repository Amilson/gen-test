/* eslint-disable no-console */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { GenStyleSettings } from '../../interfaces';
import { GenStyleGenThemeSettingsService } from './gen-style-theme-settings.service';

@Injectable()
export class GenStyleGenSettingsService {
  private readonly settingsSubject$: BehaviorSubject<GenStyleSettings> = new BehaviorSubject({});

  constructor(
    private http: HttpClient,
    private sGGenConfigService: GenStyleGenThemeSettingsService
  ) {
    // not to do
  }

  public async bootstrap(settingsUrl: string, callback?: Function) {
    const { http, settingsSubject$, sGGenConfigService } = this;

    try {
      const data = await firstValueFrom(http.get('assets/gen-style-settings.json'));
      if (!data) throw new Error('Error');

      sGGenConfigService.apply(data, callback);
      settingsSubject$.next(data);
    } catch (e) {
      console.error('gen-style-settings not found!');
    }
  }

  public settings(): Observable<any> {
    return this.settingsSubject$.asObservable();
  }
}
