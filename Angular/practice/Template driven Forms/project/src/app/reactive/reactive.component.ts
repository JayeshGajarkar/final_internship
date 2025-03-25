import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { noSpace } from '../Validators/noSpace.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
  standalone:false
})
export class ReactiveComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, noSpace]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Skills: new FormArray([
        new FormControl('', Validators.required)
      ]),

      Experience: new FormArray([
        new FormGroup({
          company: new FormControl('', Validators.required),
          position: new FormControl('', Validators.required),
          from: new FormControl('', Validators.required),
          to: new FormControl('', Validators.required)
        })
      ])
    });
    

    
  }


  get skills(): FormArray {
    return this.myForm.get('Skills') as FormArray;
  }

  get experience(): FormArray {
    return this.myForm.get('Experience') as FormArray;
  }

  onSubmit() {
    console.log(this.myForm.value.name);
    console.log(this.myForm.value.email); 
    console.log(this.myForm.value.password);
    console.log(this.myForm.value.Skills);

    console.log(this.myForm.value.Experience);
    this.myForm.reset();
  }

  OnClickAddSkill() {
    console.log('Add Skill');
    // (this.myForm.get('Skills') as FormArray).push(new FormControl('', Validators.required));

    (this.skills).push(new FormControl('', Validators.required));
    
    // for(let i of (this.myForm.controls["Skills"] as FormArray).controls){
    //   console.log(i);
    // }
  }

  OnClickRemoveSkill(index: number) {
    (this.skills).removeAt(index);
  }

  OnClickAddExperience() {
    console.log('Add Experience');
    (this.experience).push(new FormGroup({
      company: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required)
    }));
  }

  OnClickRemoveExperience(index: number) {
    (this.experience).removeAt(index);
  }
}