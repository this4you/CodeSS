import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private server: ServerService) {
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
      return this.server.request('POST', '/login', {
        login: user.Login,
        password: user.Password
      }).subscribe((response: any) => {
        debugger
        if (response.auth === true && response.token !== undefined) {
          this.token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token,
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigateByUrl('/main');
        }
      }, (error: any) => {
        //!!! TEMP
        // this.token = "testToken";
        // this.server.setLoggedIn(true, this.token);
        // this.loggedIn.next(true);
        // const userData = {
        //   token: this.token,
        // };
        // localStorage.setItem('user', JSON.stringify(userData));
        // this.router.navigateByUrl('/main');
        //!! TEMP 
      });
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