import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';
import { Project } from 'src/app/models/project';
import { GetAssignmentsByProjectService } from 'src/app/services/get-assignments-by-project.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AddUserToProjectService } from 'src/app/services/add-user-to-project.service';
import { DeleteProjectService } from 'src/app/services/delete-project.service';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  
})
export class ProjectPageComponent implements OnInit{

  projectId!: number;
  userId!: number
  assignments!: Assignment[];
  pendingAssignments!: Assignment[];
  ongoingAssignments!: Assignment[];
  forReviewAssignments!: Assignment[];
  completedAssignments!: Assignment[];
  userProjects!: Project[];
  userProject?: Project;
  storedProjects?: string | null;
  newAssignmentPopup: boolean = false;
  addUserToProject: boolean = false;
  addUserToProjectForm!: FormGroup;
  showAddNewUserMessages: { [key: number]: boolean } = {};
  showDeleteProjectWarning: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private assignmentsByProjectService : GetAssignmentsByProjectService,
      private formBuilder: FormBuilder,
      private addUserToProjectService: AddUserToProjectService,
      private deleteProjectService: DeleteProjectService,
      private profileLoaderService: ProfileLoaderService
      ){
    this.route.queryParams.subscribe((params: any) =>
    {
      console.log('QueryParams: ', params.id);
      this.projectId = params.id
      this.reloadAssignments();
    })
  }

  ngOnInit(): void {
    this.storedProjects = sessionStorage.getItem('userProjects');
    if (this.storedProjects) {
      this.userProjects = JSON.parse(this.storedProjects)
    }
    this.userProject = this.userProjects.find((p => p.id = this.projectId))
    this.addUserToProjectForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
    let storedId = sessionStorage.getItem('userId')
    if (storedId) {
      this.userId = parseInt(storedId, 10)
    }
  }

  reloadAssignments(): void {
    this.assignmentsByProjectService.getAssignmentsByUser(this.projectId).subscribe(
      (responseProfile) => {
        this.assignments = responseProfile
        console.log(this.assignments)
        this.pendingAssignments = this.assignments.filter(a => a.stage === 0);
        this.ongoingAssignments = this.assignments.filter(a => a.stage === 1);
        this.forReviewAssignments = this.assignments.filter(a => a.stage === 2);
        this.completedAssignments = this.assignments.filter(a => a.stage === 3);
      },
      (error) =>{
        console.error(`Ha habido un error al intentar cargar las tareas del proyecto con id: ${this.projectId}. Error: ${error}`);
      },
      () => console.info('proceso de cargado de tareas de este pryjecto a finalizado')
    );
  }

  changeInAssignments(){
    this.reloadAssignments();
  }
  openNewAssignmentPopup(){
    this.newAssignmentPopup = true;
  }

  closeNewAssignmentPopup(){
    this.changeInAssignments();
    this.newAssignmentPopup = false;
  }
  showDeleteProjectWarningPopup(){
    this.showDeleteProjectWarning = !this.showDeleteProjectWarning
  }
  deleteProject(){
    this.deleteProjectService.deleteProject(this.projectId).subscribe(
      (response)=>{
      },
      (error)=>{},
      ()=>{
        this.profileLoaderService.loadUserInfo(this.userId)
        this.profileLoaderService.loadProjectsAssignments(this.userId)
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 1000);
      }
    )
  }
  addUserToProjectPopup(){
    this.addUserToProject=true
  }
  closeAddUserToProjectPopup(){
    this.addUserToProject = false
  }

  get email (){
    return this.addUserToProjectForm.get('email')
  }

  sendNewUserToProject(email: string){
    this.showAddNewUserMessages[0] = true
    this.showAddNewUserMessages[1] = false
    this.showAddNewUserMessages[2] = false
    this.addUserToProjectService.addUserToProject(email, this.projectId).subscribe(
      (response)=>{
        this.showAddNewUserMessages[0] = false
        this.showAddNewUserMessages[1] = true
      },
      (error)=>{
        this.showAddNewUserMessages[0] = false
        this.showAddNewUserMessages[2] = true
      },
      ()=>{}
    )
  }
  
}
