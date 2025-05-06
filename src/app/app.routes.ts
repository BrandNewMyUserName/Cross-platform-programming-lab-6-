import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'filter-products',
    loadComponent: () => import('./components/filter-products/filter-products.component').then( m => m.FilterProductsComponent)
  },
  {
    path: 'view-db-products',
    loadComponent: () => import('./components/view-db-products/view-db-products.component').then( m => m.ViewDbProductsComponent)
  },
];
