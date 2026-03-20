import { Routes } from '@angular/router';

export const BEDROOM_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/bedroom-home/bedroom-home.component').then(
        (m) => m.BedroomHomeComponent
      ),
  },
];
