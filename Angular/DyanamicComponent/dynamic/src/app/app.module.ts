// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicHostDirective } from './dynamic-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    DynamicHostDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}