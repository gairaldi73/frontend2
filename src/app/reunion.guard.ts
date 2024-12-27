import { CanActivateFn } from '@angular/router';

export const reunionGuard: CanActivateFn = (route, state) => {
  return true;
};
