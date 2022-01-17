import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './enumToArray.pipe';



@NgModule({
  declarations: [
    EnumToArrayPipe
  ],
  imports: [],
  exports: [
    EnumToArrayPipe
  ]
})
export class PipesModule { }
