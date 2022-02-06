import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button/add-button.component';
import { MaterialComponentModuleModule } from '../material-component-module/material-component-module.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentModuleModule,
    AppRoutingModule
  ],
  exports: [
    AddButtonComponent
  ]
})
export class CommonComponentsModule { }
