import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanActivateGuardGuard } from './services/guards/can-activate-guard.guard';

const appRoute: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'details/:id',
    component: HeroDetailComponent,
    canActivate: [CanActivateGuardGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuardGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
