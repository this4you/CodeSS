import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginModel } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginModelService {
  private loginData$ = new Subject<LoginModel>();
  private loginData = new LoginModel();

  // public login$ = this.login.asObservable();
  // public password$ = this.password.asObservable();

  public LoginData$ = this.loginData$.asObservable();
  public changeLogin(login: string) {
    this.loginData.Login = login;
    this.loginData$.next(this.loginData);
  }
  
  public changePassword(password: string) {
    this.loginData.Password = password;
    this.loginData$.next(this.loginData);
  }
}
