import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoComponent } from './demo.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
