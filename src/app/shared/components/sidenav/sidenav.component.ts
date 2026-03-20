import { Component, viewChild } from "@angular/core";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from "@angular/material/expansion";
import { MatIcon } from "@angular/material/icon";
import { MatSidenav } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatTooltip } from "@angular/material/tooltip";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AngularSplitModule } from "angular-split";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.scss",
  imports: [
    MatToolbar,
    MatIcon,
    AngularSplitModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatTooltip,
    RouterLink,
    RouterOutlet,
  ],
})
export class SidenavComponent {
  readonly sidenav = viewChild.required<MatSidenav>("sidenav");

  readonly sidenavEnd = viewChild.required<MatSidenav>("sidenavEnd");

  showLeftSidenav: boolean = true;

  showRightSidenav: boolean = true;

  mainArea: boolean = true;
}
