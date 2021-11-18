import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialComponentModuleModule } from '../material-component-module/material-component-module.module';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CodeEditSubpageComponent } from './main-page/subpages/code-edit-subpage/code-edit-subpage.component';
import { UsefulLinksSubpageComponent } from './main-page/subpages/useful-links-subpage/useful-links-subpage.component';
import { TeamsSubpageComponent } from './main-page/subpages/teams-subpage/teams-subpage.component';
import { ChatSubpageComponent } from './main-page/subpages/chat-subpage/chat-subpage.component';
import { NotificationSubpageComponent } from './main-page/subpages/notification-subpage/notification-subpage.component';
import { HomeSubpageComponent } from './main-page/subpages/home-subpage/home-subpage.component';
import { SettingSubpageComponent } from './main-page/subpages/setting-subpage/setting-subpage.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MainPageComponent,
    CodeEditSubpageComponent,
    UsefulLinksSubpageComponent,
    TeamsSubpageComponent,
    ChatSubpageComponent,
    NotificationSubpageComponent,
    HomeSubpageComponent,
    SettingSubpageComponent
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
