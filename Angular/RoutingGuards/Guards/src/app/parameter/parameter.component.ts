import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parameter',
  standalone: false,
  
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.css'
})

export class ParameterComponent implements OnInit {
  constructor(private activeRoute:ActivatedRoute,private route:Router){}

  ngOnInit(){
    this.activeRoute.params.subscribe((data)=>{
      console.log(data);
    });

    this.activeRoute.paramMap.subscribe((data)=>{
      console.log(data.get('id'));
    }
    );

    this.activeRoute.queryParamMap.subscribe((data)=>{
      console.log(data.get('order'));
    })
  }

  
}
