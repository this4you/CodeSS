import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentModuleModule } from 'src/app/material-component-module/material-component-module.module';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';




@NgModule({
    declarations: [
        UserProfileComponent,
        UserProfileFormComponent,
        UserAvatarComponent
    ],
    imports: [
        CommonModule,
        MaterialComponentModuleModule,
        FormsModule,
        RouterModule,
        CommonComponentsModule
    ],
    exports: [
        UserProfileComponent,
        UserProfileFormComponent,
        UserAvatarComponent
    ]
})
export class UserControlModule { }
