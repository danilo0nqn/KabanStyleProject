import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/authguard/auth.guard';
import { DoomPageComponent } from './pages/doom-page/doom-page.component';
import { loguedGuard } from './guards/logued.guard';
import { LoadingResolverService } from './services/loading-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [loguedGuard],
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [authGuard],
    resolve: {
      randomContact: LoadingResolverService,
    },
  },
  {
    path: 'doom',
    component: DoomPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
