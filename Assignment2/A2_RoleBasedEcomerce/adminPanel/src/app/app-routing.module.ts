import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AdminComponent } from './admin/admin.component';
// import { OrderComponent } from './admin/order/order.component';
// import { ProductComponent } from './admin/product/product.component';
// import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'xyz',component:ForbiddenComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
