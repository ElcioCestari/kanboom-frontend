import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
class PermissionsService {

  constructor(private router: Router) {}
  canActivate(userId: string): boolean | UrlTree {
    if (sessionStorage.getItem("id")) {
      return true
    }
    alert('você não tem permissão para acessar esse conteúdo.')
    return this.router.createUrlTree(['/login']);
  }
}

export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(PermissionsService).canActivate(route.params["id"]);
  };
