import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewContainerDirective } from './directives/view-container.directive';
import { DynamicComponent } from './dynamic/dynamic.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  standalone:false
})
export class AppComponent {

  @ViewChild(ViewContainerDirective) viewContainer!:ViewContainerDirective;
  @ViewChild('dynamic') container!: ViewContainerRef;

  loadComponenet(){
    const viewContainerRef=this.viewContainer.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(DynamicComponent);
  }

  rating:number=0;
  assign(rate:number){
      this.rating=rate;
  }

  loadComponenet2(){
    console.log(this.container);
  }

  
}