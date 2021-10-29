import { Component, OnInit } from '@angular/core';
import { LoginModelService } from 'src/app/services/login-model.service';

@Component({
  selector: 'code-ss-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public hide: boolean = true;
  public login: string = "";
  public password: string = "";

  constructor(
    private readonly loginModelService: LoginModelService
  ) { }

  ngOnInit(): void {
  }

  loginChanged(event: any): void {
    this.loginModelService.changeLogin(event as string);
  }

  passwordChanged(event: any): void {
    this.loginModelService.changePassword(event as string);
  }

}
