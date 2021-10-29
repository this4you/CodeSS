import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialComponentModuleModule } from '../material-component-module/material-component-module.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentModuleModule,
    FormsModule
  ],
  exports: []
})
export class ComponentsModule { }
