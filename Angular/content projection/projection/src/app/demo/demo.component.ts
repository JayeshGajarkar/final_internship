import { Component, ContentChild, Input } from '@angular/core';
import { ConditionalDirective } from '../directive/conditional.directive';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  // @ContentChild(ConditionalDirective) condition!:ConditionalDirective;

  // constructor(){
  //   console.log(this.condition!.template);
  // }

  @Input() idAdmin!:boolean;

  getComponent(){
    return this.idAdmin? AdminComponent:UserComponent;
  }
}
