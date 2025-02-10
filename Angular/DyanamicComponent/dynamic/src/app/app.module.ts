// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdComponent } from './ad.component';
import { ProfileComponent } from './profile.component';
import { AdHostDirective } from './ad-host.directive';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    ProfileComponent,
    AdHostDirective
  ],
  imports: [BrowserModule],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule {}