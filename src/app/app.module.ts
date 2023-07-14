import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DoomPageComponent } from './pages/doom-page/doom-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProjectsSidebarComponent } from './components/projects-sidebar/projects-sidebar.component';
import { ProjectsExpansionPanelComponent } from './components/projects-expansion-panel/projects-expansion-panel.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UrgentTasksComponent } from './components/urgent-tasks/urgent-tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { PendingTasksComponent } from './components/taskPage/pending-tasks/pending-tasks.component';
import { OngoingTasksComponent } from './components/taskPage/ongoing-tasks/ongoing-tasks.component';
import { ForReviewTasksComponent } from './components/taskPage/for-review-tasks/for-review-tasks.component';
import { CompletedTasksComponent } from './components/taskPage/completed-tasks/completed-tasks.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    DoomPageComponent,
    NavbarComponent,
    SidebarComponent,
    LoginFormComponent,
    ProjectsSidebarComponent,
    ProjectsExpansionPanelComponent,
    LoadingComponent,
    UrgentTasksComponent,
    TaskListComponent,
    PendingTasksComponent,
    OngoingTasksComponent,
    ForReviewTasksComponent,
    CompletedTasksComponent,
    ProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
