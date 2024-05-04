import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav

  @ViewChild('sidenavEnd', { static: false }) sidenavEnd!: MatSidenav

  showLeftSidenav: boolean = true

  showRightSidenav: boolean = true

  mainArea: boolean = true
}
