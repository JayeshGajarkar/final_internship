import { CanDeactivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  const service:AuthService=inject(AuthService);

  if(service.isSubmited()){
    return true;
  }else{
    return confirm("You have unsave change do you want to exit");
  }
};
