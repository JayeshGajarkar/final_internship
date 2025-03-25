import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template:TemplateRef<any>,private cotainer:ViewContainerRef) { }

 
  @Input('appIf') set display(condition:boolean){
    if(condition){
      this.cotainer.createEmbeddedView(this.template);
    }else{
      this.cotainer.clear();
    }
    
  };

  
}
