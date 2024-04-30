import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageHomeComponent } from './components/garage-home/garage-home.component';

const routes: Routes = [
  {
    path: '',
    component: GarageHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarageRoutingModule {}
