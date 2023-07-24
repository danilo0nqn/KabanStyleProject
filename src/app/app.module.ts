import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthInterceptor } from './interceptors/auth.interceptor';


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
import { UrgentTasksComponent } from './components/urgent-tasks/urgent-tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { PendingTasksComponent } from './components/taskPage/pending-tasks/pending-tasks.component';
import { OngoingTasksComponent } from './components/taskPage/ongoing-tasks/ongoing-tasks.component';
import { ForReviewTasksComponent } from './components/taskPage/for-review-tasks/for-review-tasks.component';
import { CompletedTasksComponent } from './components/taskPage/completed-tasks/completed-tasks.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { TestsPageComponent } from './pages/tests-page/tests-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PopupTestComponent } from './components/popup-test/popup-test.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FilterAssignmentsPipe } from './pipes/filter-assignments.pipe';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { NewProjectFormComponent } from './components/new-project-form/new-project-form.component';
import { ContactDetailsThroughPopupComponent } from './components/contact-details-through-popup/contact-details-through-popup.component';
import { NewAssignmentFormComponent } from './components/new-assignment-form/new-assignment-form.component';


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
    UrgentTasksComponent,
    TaskListComponent,
    PendingTasksComponent,
    OngoingTasksComponent,
    ForReviewTasksComponent,
    CompletedTasksComponent,
    ProjectPageComponent,
    ContactDetailsComponent,
    TestsPageComponent,
    NotFoundPageComponent,
    PopupTestComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    FilterAssignmentsPipe,
    NewProjectComponent,
    NewProjectFormComponent,
    ContactDetailsThroughPopupComponent,
    NewAssignmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
