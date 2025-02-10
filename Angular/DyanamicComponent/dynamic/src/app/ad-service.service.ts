// ad.service.ts
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdComponent } from './ad.component';
import { ProfileComponent } from './profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(viewContainerRef: ViewContainerRef, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
