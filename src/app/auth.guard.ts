import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth/auth.service";


@Injectable()
export class AuthGuard {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
        return new Observable<boolean>(obs => {
            this.authService.isLoggedIn.subscribe(isLogin => {
                if (!isLogin) {
                    this.router.navigateByUrl(this.router.url);
                }
                obs.next(isLogin);
            })
        });
    }
}