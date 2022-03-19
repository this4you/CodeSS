import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentModuleModule } from 'src/app/material-component-module/material-component-module.module';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';




@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        MaterialComponentModuleModule,
        FormsModule,
        RouterModule,
        CommonComponentsModule
    ],
    exports: [
        UserProfileComponent
    ]
})
export class UserControlModule { }
