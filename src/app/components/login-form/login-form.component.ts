import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/model/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'code-ss-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public hide: boolean = true;
  public authDate: LoginModel = new LoginModel();

  constructor(private authService: AuthService) { }

  public async keyDownFunction(event, form) {
    if (form.valid && event.keyCode === 13) {
      await this.authService.login(this.authDate);
    }
  }


  ngOnInit(): void {
  }
}
