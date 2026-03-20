import { importProvidersFrom, provideZonelessChangeDetection } from "@angular/core";

import { VERSION as CDK_VERSION } from "@angular/cdk";
import { VERSION as MAT_VERSION } from "@angular/material/core";

import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";

/* eslint-disable no-console */
console.info("Angular CDK version", CDK_VERSION.full);
console.info("Angular Material version", MAT_VERSION.full);

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    importProvidersFrom(BrowserModule, AppRoutingModule),
  ],
}).catch((err) => console.error(err));
