import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  const expectedRole = route.data['role'];
  return true;

  if (!role || (expectedRole && role !== expectedRole)) {
    router.navigate(['/auth']);
    return false;
  }
};
