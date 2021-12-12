import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ServerService } from './server.service';
import { CodeCategoryService } from './api/code-category.service';
import { CodeService } from './api/code.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService, 
    ServerService, 
    CodeCategoryService,
    CodeService
  ]
})
export class ServicesModule { }
