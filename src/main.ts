import { provideZonelessChangeDetection } from "@angular/core";

import { VERSION as CDK_VERSION } from "@angular/cdk";
import { VERSION as MAT_VERSION } from "@angular/material/core";

import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";
import { AppComponent } from "./app/app.component";

/* eslint-disable no-console */
console.info("Angular CDK version", CDK_VERSION.full);
console.info("Angular Material version", MAT_VERSION.full);

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(APP_ROUTES),
  ],
}).catch((err) => console.error(err));
