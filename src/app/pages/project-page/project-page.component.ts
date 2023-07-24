import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';
import { Project } from 'src/app/models/project';
import { GetAssignmentsByProjectService } from 'src/app/services/get-assignments-by-project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  
})
export class ProjectPageComponent implements OnInit{

  projectId!: number;
  assignments!: Assignment[];
  pendingAssignments!: Assignment[];
  ongoingAssignments!: Assignment[];
  forReviewAssignments!: Assignment[];
  completedAssignments!: Assignment[];
  userProjects!: Project[];
  userProject?: Project;
  storedProjects?: string | null;
  newAssignmentPopup: boolean = false;

  constructor( private route: ActivatedRoute, private assignmentsByProjectService : GetAssignmentsByProjectService ){
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

}
