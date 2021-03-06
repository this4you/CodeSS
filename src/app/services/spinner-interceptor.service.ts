import { HttpContextToken, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, throwError } from "rxjs"
import { catchError, map } from 'rxjs/operators';

export const IS_NEED_SPINER = new HttpContextToken<boolean>(() => false);

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(
        private spinnerService: NgxSpinnerService,
        private _snackBar: MatSnackBar
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.context.get(IS_NEED_SPINER)) {
            this.spinnerService.show();
            return next.handle(req)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        this.spinnerService.hide();
                        this._snackBar.open(`Request error ${error.message}`, null, { duration: 4000 });
                        return throwError(error);
                    })
                )
                .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
                    if (evt instanceof HttpResponse) {
                        this.spinnerService.hide();
                    }
                    return evt;
                }));
        } else {
            return next.handle(req);
        }
    }
}

