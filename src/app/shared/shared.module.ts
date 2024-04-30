import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AngularSplitModule } from 'angular-split';

import { SidenavComponent } from './components/sidenav/sidenav.component';

var module = [
  MatSidenavModule,
  MatExpansionModule,
  AngularSplitModule,
  MatSidenav,
  MatIconModule,
  RouterModule,
  MatToolbarModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [SidenavComponent],
  imports: [module, CommonModule],
  exports: [module],
})
export class SharedModule {}
