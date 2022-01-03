import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CodeCatalogComponent } from './containers/code-catalog/code-catalog.component';
import { CodeEditorComponent } from './containers/code-editor/code-editor.component';
import { LoginFormComponent } from './containers/login-form/login-form.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ChatSubpageComponent } from './pages/main-page/subpages/chat-subpage/chat-subpage.component';
import { CodeEditSubpageComponent } from './pages/main-page/subpages/code-edit-subpage/code-edit-subpage.component';
import { HomeSubpageComponent } from './pages/main-page/subpages/home-subpage/home-subpage.component';
import { NotificationSubpageComponent } from './pages/main-page/subpages/notification-subpage/notification-subpage.component';
import { SettingSubpageComponent } from './pages/main-page/subpages/setting-subpage/setting-subpage.component';
import { TeamsSubpageComponent } from './pages/main-page/subpages/teams-subpage/teams-subpage.component';
import { UsefulLinksSubpageComponent } from './pages/main-page/subpages/useful-links-subpage/useful-links-subpage.component';

const routes: Routes = [
  {
    path: "main",
    canActivate: [AuthGuard],
    component: MainPageComponent,
    children: [
      { path: "", component: HomeSubpageComponent },
      { 
        path: "code", component: CodeEditSubpageComponent,
        children: [
          {path: "create", component: CodeEditorComponent},
          {path: "catalog/:category", component: CodeCatalogComponent},
        ]
     },
      { path: "links", component: UsefulLinksSubpageComponent },
      { path: "team", component: TeamsSubpageComponent },
      { path: "chat", component: ChatSubpageComponent },
      { path: "notification", component: NotificationSubpageComponent },
      { path: "setting", component: SettingSubpageComponent }

    ]
  },
  {
    path: "",
    component: HomePageComponent,
    canActivate: [NoAuthGuard],
    children: [
      { path: "login", component: LoginFormComponent },
      { path: "register", component: RegisterFormComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
