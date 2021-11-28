import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { ServerService } from './server.service';
import { CodeCategoryService } from './code-category.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, ServerService, CodeCategoryService]
})
export class ServicesModule { }
