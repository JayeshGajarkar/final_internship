import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebouncingComponent } from './debouncing/debouncing.component';
import { ProductApiComponent } from './product-api/product-api.component';

@NgModule({
  declarations: [
    AppComponent,
    DebouncingComponent,
    ProductApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
