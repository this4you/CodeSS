import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/model/register.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'code-ss-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  hide = true;
  repeatHide = true;
  public registerData: RegisterModel = new RegisterModel();
  constructor(
    protected authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public async keyDownFunction(event, form) {
    if (form.valid && event.keyCode === 13) {
      await this.authService.register(this.registerData);      
    }
  }

}
