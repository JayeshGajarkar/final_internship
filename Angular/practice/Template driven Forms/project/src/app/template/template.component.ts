import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent  {

  @ViewChild('myForm') form!: NgForm;

  myName = 'Jayesh';
  


  onSubmit(form: NgForm) {
    console.log(form);
    
    // console.log(form.control)

    // console.log(form.controls)

    // form.setValue({
    //   name: '',
    //   email: '',
    //   password: '',
    // });

    this.form.reset();

    this.form.form.patchValue({
      name: 'Jayesh', 
    })

    
  };


}
