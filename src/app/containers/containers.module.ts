import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialComponentModuleModule } from '../material-component-module/material-component-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeCatalogComponent } from './code-catalog/code-catalog.component';
import { RouterModule } from '@angular/router';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CodeEditModule } from '../modules/code-edit-module/code-edit.module';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    CodeCatalogComponent,
    CodeEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CodemirrorModule,
    CodeEditModule
  ],
  exports: []
})
export class ContainersModule { }
