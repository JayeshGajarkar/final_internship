import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
  standalone: false,
})
export class ProfileEditorComponent {
  user: User = {
    name: 'Jayesh',
    email: 'jayeshgajarkar@gmail.com',
    address: { street: 'Main St', city: 'Ajara', zipCode: '416505' }
  };
  editEnable: boolean = false;

  

  onEditEnable() {
    this.editEnable = true;
  }

  onSubmit() {
    this.editEnable = false;
    //console.log(this.user);
  }
}