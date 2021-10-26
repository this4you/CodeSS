import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialComponentModuleModule } from '../material-component-module/material-component-module.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule, 
    MaterialComponentModuleModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class PagesModule { }
