import { Component, viewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { AngularSplitModule } from 'angular-split';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    imports: [MatToolbar, MatIcon, AngularSplitModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatTooltip, RouterLink, RouterOutlet]
})
export class SidenavComponent {
  readonly sidenav = viewChild.required<MatSidenav>('sidenav');

  readonly sidenavEnd = viewChild.required<MatSidenav>('sidenavEnd');

  showLeftSidenav: boolean = true

  showRightSidenav: boolean = true

  mainArea: boolean = true
}
