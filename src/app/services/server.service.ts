import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IS_NEED_SPINER } from './spinner-interceptor.service';

const baseUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class ServerService {
    private loggedIn = false;
    private token: string;

    constructor(private http: HttpClient) { }

    setLoggedIn(loggedIn: boolean, token?: string) {
        this.loggedIn = loggedIn;
        this.token = token;
    }

    request(method: string, route: string, data?: any, needSpin?: boolean) {
        const context: HttpContext = new HttpContext();
        context.set(IS_NEED_SPINER, needSpin);

        if (method === 'GET') {
            return this.get(route, context, data);
        }

        const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;
        debugger
        if (data instanceof FormData) {
            return this.http.post(baseUrl + route, data, {
                responseType: 'json',
                observe: 'body',
                headers: header,
                context
            });
        } else {
            return this.http.request(method, baseUrl + route, {
                body: data,
                responseType: 'json',
                observe: 'body',
                headers: header,
                context
            });
        }
    }

    get(route: string, context: HttpContext, data?: any) {
        const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

        let params = new HttpParams();
        if (data !== undefined) {
            Object.getOwnPropertyNames(data).forEach(key => {
                params = params.set(key, data[key]);
            });
        }

        return this.http.get(baseUrl + route, {
            responseType: 'json',
            headers: header,
            params,
            context
        });
    }
}