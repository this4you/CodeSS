import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialComponentModuleModule } from '../material-component-module/material-component-module.module';
import { FormsModule } from '@angular/forms';
import { CodeCatalogComponent } from './code-catalog/code-catalog.component';
import { RouterModule } from '@angular/router';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CodeEditorComponent } from './code-editor/code-editor.component';



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
    RouterModule,
    CodemirrorModule
  ],
  exports: []
})
export class ComponentsModule { }
