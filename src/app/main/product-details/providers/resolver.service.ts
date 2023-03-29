import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Event, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { ProductDetailsService } from './product-details.service';

@Injectable()
export class ProductDetailsResolver {
  constructor(private service: ProductDetailsService, private router: Router) {
    // not to do
  }

  private getLastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.getLastChild(route.firstChild);
    }

    return route;
  }

  public getParams() {
    const { root } = this.router.routerState.snapshot;
    const route: ActivatedRouteSnapshot = this.getLastChild(root);
    const found = route ? route?.params || '' : '';
    return found;
  }

  async resolve() {
    this.router.events
      .pipe(
        filter((event: Event) => {
          return event instanceof NavigationEnd;
        }),
        take(1)
      )
      .subscribe(() => {
        const queryParams = this.router.getCurrentNavigation()?.finalUrl?.queryParams;
        const params = this.getParams();
        this.service.resolve(params, queryParams);
      });
  }
}
