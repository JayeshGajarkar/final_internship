import { Component, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'decorator';

  @ViewChild(DemoComponent) child:DemoComponent;

  onClick(){
    this.child.sayHello();
  }
}
