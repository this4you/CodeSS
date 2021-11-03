import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { ServerService } from './server.service';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private server: ServerService,
    private spinnerService: NgxSpinnerService,
    private _snackBar: MatSnackBar
  ) {
    console.log('Auth Service');
    const userData = localStorage.getItem('user');
    if (userData) {
      console.log('Logged in from memory');
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  login(user: LoginModel): any {
    if (user.Login !== '' && user.Password !== '') {
      this.spinnerService.show();
      return this.server.request('POST', 'user/authenticate', {
        login: user.Login,
        password: user.Password
      }).subscribe((response: any) => {
        this.spinnerService.hide();
        if (response.jwtToken) {
          this.token = response.jwtToken;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token,
            id: response.id,
            login: response.login
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigateByUrl('/main');
        }
      }, (error: any) => {
        this.spinnerService.hide();
        this._snackBar.open("Login error", null, {duration: 2000});});
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    delete this.token;

    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }
}