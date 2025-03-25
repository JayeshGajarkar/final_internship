import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appViewContainer]',
  standalone: false
})
export class ViewContainerDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
