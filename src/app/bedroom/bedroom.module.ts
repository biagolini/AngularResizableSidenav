import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BedroomRoutingModule } from './bedroom-routing.module';
import { BedroomHomeComponent } from './components/bedroom-home/bedroom-home.component';


@NgModule({
    imports: [CommonModule, BedroomRoutingModule, BedroomHomeComponent],
})
export class BedroomModule {}
