import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: false,
  
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  CourseId:String;
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(param=>{
      this.CourseId=param.get('id');
      console.log(this.CourseId);
    })
  }
}
