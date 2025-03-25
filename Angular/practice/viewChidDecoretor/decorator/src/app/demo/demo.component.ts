import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit,AfterContentInit,AfterViewInit{
  
  
  @ContentChild('paragraph') inputEl:ElementRef; 
  @ViewChild('para') ele1:ElementRef;

  ngOnInit(){
    console.log("ngOnInit called")
    console.log(this.inputEl);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called")
    console.log(this.inputEl?.nativeElement.textContent);
    this.inputEl!.nativeElement.textContent="This is new paragraph";
    console.log(this.ele1);
  }

  ngAfterViewInit(): void {
    console.log(this.ele1.nativeElement.textContent);
  }

  sayHello(){
    console.log("Hello from the demo");
  }


}
