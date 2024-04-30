import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { GarageHomeComponent } from './components/garage-home/garage-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GarageHomeComponent],
  imports: [CommonModule, GarageRoutingModule, SharedModule],
})
export class GarageModule {}
