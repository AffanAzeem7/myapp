import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule,
  NgModuleFactoryLoader,
  ModuleWithProviders,
  StaticProvider
} from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
