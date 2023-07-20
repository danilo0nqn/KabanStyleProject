import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/authguard/auth.guard';
import { DoomPageComponent } from './pages/doom-page/doom-page.component';
import { loguedGuard } from './guards/logued.guard';
import { LoadingResolverService } from './services/loading-resolver.service';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { TestsPageComponent } from './pages/tests-page/tests-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
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
    path: 'project',
    component: ProjectPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'doom',
    component: DoomPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tests',
    component: TestsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
