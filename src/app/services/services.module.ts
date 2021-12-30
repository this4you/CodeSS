import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ServerService } from './server.service';
import { CodeCategoryService } from './common/code-category.service';
import { CodeService } from './common/code.service';
import { CodeCategoryApiService } from './api/code-category-api.service';
import { CodeApiService } from './api/code-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CodeCategoryApiService,
    CodeApiService, 

    AuthService, 
    ServerService,
    
    CodeCategoryService,
    CodeService
  ]
})
export class ServicesModule { }
