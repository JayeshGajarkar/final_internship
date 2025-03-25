import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { UserComponent } from './demo/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ParameterComponent } from './parameter/parameter.component';
import { RegistrationComponent } from './demo/registration/registration.component';
import { deactivateGuard } from './Guards/deactivate.guard';

const routes: Routes = [
  {path:'',redirectTo:'demo',pathMatch:'full'},
  {path:'demo',component:DemoComponent,children:[
    {path:'user',component:UserComponent}
  ]},
  {path:'parameter/:id',component:ParameterComponent},
  {path:'registration',component:RegistrationComponent,canDeactivate:[deactivateGuard]},
  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
