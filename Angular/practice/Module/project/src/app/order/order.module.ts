import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,UserModule,SharedModule
  ],
  exports:[OrderComponent]
})
export class OrderModule { }
