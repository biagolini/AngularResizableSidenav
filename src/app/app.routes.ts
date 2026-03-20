import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/sidenav/sidenav.component').then(
        (m) => m.SidenavComponent
      ),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./garage/garage.routes').then((m) => m.GARAGE_ROUTES),
      },
      {
        path: 'bedroom',
        loadChildren: () =>
          import('./bedroom/bedroom.routes').then((m) => m.BEDROOM_ROUTES),
      },
      {
        path: 'kitchen',
        loadChildren: () =>
          import('./kitchen/kitchen.routes').then((m) => m.KITCHEN_ROUTES),
      },
    ],
  },
];
