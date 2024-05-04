import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { GarageHomeComponent } from './components/garage-home/garage-home.component'
import { GarageRoutingModule } from './garage-routing.module'

@NgModule({
  declarations: [GarageHomeComponent],
  imports: [CommonModule, GarageRoutingModule, SharedModule]
})
export class GarageModule {}
