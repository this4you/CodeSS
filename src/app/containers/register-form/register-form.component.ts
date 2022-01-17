import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from 'src/app/model/register.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'code-ss-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  hide = true;
  repeatHide = true;
  public registerData: RegisterModel = new RegisterModel();
  constructor( protected authService: AuthService) { }

  formSubmitted: boolean = false;
    
  public async submitForm(form: NgForm) {
      this.formSubmitted = true;
      if (form.valid) {
          debugger
          await this.authService.register(this.registerData);
          this.formSubmitted = false;
      }
  }

}
