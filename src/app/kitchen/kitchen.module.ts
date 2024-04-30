import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenHomeComponent } from './components/kitchen-home/kitchen-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [KitchenHomeComponent],
  imports: [CommonModule, KitchenRoutingModule, SharedModule],
})
export class KitchenModule {}
