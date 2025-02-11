import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicHostDirective } from './dynamic-host.directive';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  standalone:false
})
export class AppComponent {
  @ViewChild(DynamicHostDirective, { static: true }) dynamicHost!: DynamicHostDirective;

  constructor() {}


  loadComponent() {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(DynamicComponentComponent);
  }

  rating:number=0;
  assign(rate:number){
      this.rating=rate;
  }
}