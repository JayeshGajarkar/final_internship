import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [

  {path:'admin',component:AdminComponent,children:[
    {path:'order',component:OrderComponent},
    {path:'product',component:ProductComponent},
    {path:'user',component:UserComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }