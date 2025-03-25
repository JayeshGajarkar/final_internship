import { CanDeactivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const deactiavateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const service:LoginService=inject(LoginService);

  if(service.isSubmited()){
    return true;
  }else{
    return confirm("You have unsaved changes do you want to continue ?");
  }
  
};
