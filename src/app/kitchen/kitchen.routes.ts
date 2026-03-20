import { Routes } from '@angular/router';

export const KITCHEN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/kitchen-home/kitchen-home.component').then(
        (m) => m.KitchenHomeComponent
      ),
  },
];
