import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentModuleModule } from 'src/app/material-component-module/material-component-module.module';
import { CodeContentComponent } from './components/code-content/code-content.component';
import { CodeItemComponent } from './components/code-item/code-item.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';



@NgModule({
    declarations: [
        CategoryListComponent,
        CodeContentComponent,
        CodeItemComponent
    ],
    imports: [
        CommonModule,
        MaterialComponentModuleModule,
        FormsModule,
        RouterModule,
        CommonComponentsModule
    ],
    exports: [
        CategoryListComponent,
        CodeContentComponent,
        CodeItemComponent
    ]
})
export class CodeEditModule { }
