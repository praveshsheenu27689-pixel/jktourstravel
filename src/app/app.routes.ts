import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
  { path: 'destination/:name', loadComponent: () => import('./components/destination-page/destination-page.component').then(m => m.DestinationPageComponent) },
  { path: 'experience/:name', loadComponent: () => import('./components/category-page/category-page.component').then(m => m.CategoryPageComponent) },
  { path: '**', redirectTo: '' }
];
