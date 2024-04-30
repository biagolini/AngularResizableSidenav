import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedroomHomeComponent } from './components/bedroom-home/bedroom-home.component';

const routes: Routes = [
  {
    path: '',
    component: BedroomHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedroomRoutingModule {}
