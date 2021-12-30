import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ServerService } from './server.service';
import { CodeCategoryService } from './common/code-category.service';
import { CodeService } from './api/code.service';
import { CodeCategoryApiService } from './api/code-category-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService, 
    ServerService,
    CodeCategoryApiService, 
    CodeCategoryService,
    CodeService
  ]
})
export class ServicesModule { }
