import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'


import { GarageHomeComponent } from './components/garage-home/garage-home.component'
import { GarageRoutingModule } from './garage-routing.module'

@NgModule({
    imports: [CommonModule, GarageRoutingModule, GarageHomeComponent]
})
export class GarageModule {}
