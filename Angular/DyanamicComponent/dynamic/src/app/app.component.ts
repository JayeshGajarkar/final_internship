// app.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AdHostDirective } from './ad-host.directive';
import { AdService } from './ad.service';
import { AdComponent } from './ad.component';
import { ProfileComponent } from './profile.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="loadAd()">Load Ad</button>
      <button (click)="loadProfile()">Load Profile</button>
      <ng-template appAdHost></ng-template>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild(AdHostDirective, { static: true }) adHost!: AdHostDirective;

  constructor(private adService: AdService) {}

  ngAfterViewInit() {
    this.loadAd();
  }

  loadAd() {
    this.adService.loadComponent(this.adHost.viewContainerRef, AdComponent);
  }

  loadProfile() {
    this.adService.loadComponent(this.adHost.viewContainerRef, ProfileComponent);
  }
}