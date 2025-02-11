import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicHost]',
  standalone: false
})
export class DynamicHostDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
