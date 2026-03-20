import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/sidenav/sidenav.component').then(m => m.SidenavComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./garage/garage.module').then((m) => m.GarageModule),
      },
      {
        path: 'bedroom',
        loadChildren: () =>
          import('./bedroom/bedroom.module').then((m) => m.BedroomModule),
      },
      {
        path: 'kitchen',
        loadChildren: () =>
          import('./kitchen/kitchen.module').then((m) => m.KitchenModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
