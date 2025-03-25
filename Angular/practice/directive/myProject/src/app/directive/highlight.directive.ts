import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

@Input('appHighlight') highLightColor:String="yellow";
@HostBinding('style.border') border:string="none";

constructor(private element:ElementRef,private render:Renderer2){}
  

@HostListener('mouseenter') mouseEnter() {
  // this.element.nativeElement.style.backgroundColor=this.highLightColor;
  this.render.setStyle(this.element.nativeElement,"backgroundColor",this.highLightColor);
  this.border="2px solid black";
}

@HostListener('mouseleave') mouseRemove() {
  // this.element.nativeElement.style.backgroundColor="white";
  this.render.setStyle(this.element.nativeElement,"backgroundColor",'white');
  this.border='none';
}

}

