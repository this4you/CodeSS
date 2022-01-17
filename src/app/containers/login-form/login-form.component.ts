import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/model/login.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'code-ss-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

    public hide: boolean = true;
    public authDate: LoginModel = new LoginModel();

    constructor(private authService: AuthService) { }

    formSubmitted: boolean = false;
    
    public async submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            await this.authService.login(this.authDate);
            this.formSubmitted = false;
        }
    }
}
