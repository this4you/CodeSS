import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoginModelService } from './login-model.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, LoginModelService]
})
export class ServicesModule { }
