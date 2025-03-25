import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input('appStyle') set display(obj:Object){
    for(let [style,property] of Object.entries(obj)){
      this.renderer.setStyle(this.element.nativeElement,style,property);
    }
  }

}
