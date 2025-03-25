import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,canActivate:[authGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[authGuard]},
  {path:'profile/:name',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
