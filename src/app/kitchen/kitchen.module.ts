import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenHomeComponent } from './components/kitchen-home/kitchen-home.component';


@NgModule({
    imports: [CommonModule, KitchenRoutingModule, KitchenHomeComponent],
})
export class KitchenModule {}
