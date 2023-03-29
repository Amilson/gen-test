import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent, MainLayoutModule } from './layouts/main';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => {
      return import('./main').then((m: any) => {
        return m.ProductsModule;
      });
    }
  },
  {
    path: 'product/details',
    component: MainLayoutComponent,
    loadChildren: () => {
      return import('./main').then((m: any) => {
        return m.ProductDetailsModule;
      });
    }
  },
  {
    path: 'shopping',
    component: MainLayoutComponent,
    loadChildren: () => {
      return import('./main').then((m: any) => {
        return m.ShoppingModule;
      });
    }
  },
  {
    path: 'shopping-success',
    component: MainLayoutComponent,
    loadChildren: () => {
      return import('./main').then((m: any) => {
        return m.ShoppingSuccessModule;
      });
    }
  },
  {
    path: 'components',
    component: MainLayoutComponent,
    loadChildren: () => {
      return import('./main').then((m: any) => {
        return m.ComponentsModule;
      });
    }
  }
];

@NgModule({
  imports: [MainLayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
