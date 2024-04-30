import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenHomeComponent } from './components/kitchen-home/kitchen-home.component';

const routes: Routes = [
  {
    path: '',
    component: KitchenHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenRoutingModule {}
