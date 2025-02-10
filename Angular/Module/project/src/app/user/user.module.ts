import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    UserComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[LoginComponent,
    ProfileComponent,
    RegistrationComponent,UserComponent]
})
export class UserModule { }
