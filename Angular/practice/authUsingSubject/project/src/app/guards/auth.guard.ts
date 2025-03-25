
import { CanActivateFn,  } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('isLoggedIn')==='true') {
    return true;
  } else {
    alert("Login first");
    return false;
  }
};

