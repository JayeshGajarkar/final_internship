import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParameterComponent } from './parameter/parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ParameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
