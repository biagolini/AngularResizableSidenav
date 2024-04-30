import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BedroomRoutingModule } from './bedroom-routing.module';
import { BedroomHomeComponent } from './components/bedroom-home/bedroom-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BedroomHomeComponent],
  imports: [CommonModule, BedroomRoutingModule, SharedModule],
})
export class BedroomModule {}
