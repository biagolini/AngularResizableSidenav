import { Routes } from '@angular/router';

export const GARAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/garage-home/garage-home.component').then(
        (m) => m.GarageHomeComponent
      ),
  },
];
