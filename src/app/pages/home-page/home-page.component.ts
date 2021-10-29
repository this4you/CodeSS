import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/login.model';
import { LoginModelService } from 'src/app/services/login-model.service';

@Component({
  selector: 'code-ss-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private loginData = new LoginModel();

  constructor(private readonly router: Router,
    private readonly loginModelService: LoginModelService) { }

  ngOnInit(): void {
    this.loginModelService.LoginData$.subscribe(data => this.loginData = data);
  }

  singIn(): void {
    if (this.router.url == "/login") {
      alert(JSON.stringify(this.loginData));
    }
  }

}
