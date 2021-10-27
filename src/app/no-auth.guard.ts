import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { AuthService } from "./services/auth.service";


@Injectable()
export class NoAuthGuard {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Promise<boolean> | boolean {
        let isAuth: boolean = this.auth.isAuth;
        if (isAuth) {
            this.router.navigateByUrl('/main');
        }
        return !isAuth;
    }
}