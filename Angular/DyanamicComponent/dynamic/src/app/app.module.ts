// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ViewContainerDirective } from './directives/view-container.directive';


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    ViewContainerDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}