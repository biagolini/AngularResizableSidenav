import { provideZoneChangeDetection, importProvidersFrom } from "@angular/core";
import '@angular/localize/init'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { VERSION as CDK_VERSION } from '@angular/cdk'
import { VERSION as MAT_VERSION } from '@angular/material/core'


import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full)
console.info('Angular Material version', MAT_VERSION.full)

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule),
        provideAnimationsAsync()
    ]
})
  .catch(err => console.error(err))
