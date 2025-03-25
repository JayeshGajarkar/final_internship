import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppClass]'
})
export class AppClassDirective {

  
  constructor(private renderer:Renderer2,private element:ElementRef) { }

  @Input('appAppClass') set display(obj:Object){
    for(let [className,consdition] of Object.entries(obj)){
      if(consdition){
        this.renderer.addClass(this.element.nativeElement,className);
      }
    }
  }


}
