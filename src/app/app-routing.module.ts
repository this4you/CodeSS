import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NoAuthGuard } from './no-auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: "main", canActivate: [AuthGuard], component: MainPageComponent },
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
