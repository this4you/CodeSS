import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, throwError } from "rxjs"
import { catchError } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError( (error: HttpErrorResponse) => {
                if (error.status == 401) {
                    console.log(error.message);
                    this.authService.logout(); 
                }
                return throwError(error);
            })
        ); 
    }
}

