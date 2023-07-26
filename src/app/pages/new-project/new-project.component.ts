import { Component, OnInit } from '@angular/core';
import { NewProjectFormComponent } from 'src/app/components/new-project-form/new-project-form.component';
import { NewProjectService } from 'src/app/services/new-project.service';
import { Router, NavigationExtras } from '@angular/router';
import { ProfileLoaderService } from 'src/app/services/profile-loader.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit{

  storedId! : string | null
  userId!: number;
  createdProjectId!: number;
  errorNewProject: string = '';
  showAddNewProjectMessages: { [key: number]: boolean } = {};

  constructor(private newProjectService: NewProjectService, private router: Router, private profileLoader : ProfileLoaderService){}

  ngOnInit(): void {
    this.storedId = sessionStorage.getItem('userId');
    if (this.storedId != null) {
      this.userId = parseInt(this.storedId, 10);
    }
  }

  newProject(value: any){
    let data = value
    data.createdBy = this.userId
    this.showAddNewProjectMessages[0] = true
    this.showAddNewProjectMessages[1] = false
    this.showAddNewProjectMessages[2] = false
    this.newProjectService.newProject(data, this.userId).subscribe(
      (response) => {
        console.log("Projecto creado correctamente!")
        this.showAddNewProjectMessages[0] = false
        this.showAddNewProjectMessages[1] = true
      },
      (error) => {
        console.error(`Ha habido un error al intentar crear el projecto ${error}`);
        this.showAddNewProjectMessages[0] = false
        this.showAddNewProjectMessages[2] = true
      },
      () => {
        console.info('proceso de creacion de projecto ha finalizado');
        this.profileLoader.loadProjectsAssignments(this.userId)
        this.router.navigate(['home']);
        /* TODO: Idealmente, deberia ir al projecto, peor no se como devolver el id correcto dle projecto nuevo para pasarlo por queryparamas con navigate */
        /* let navigationExtras: NavigationExtras = {
          queryParams: {
            id: this.createdProjectId
          }
        }
        this.router.navigate(['project'], navigationExtras); */
      }
    )
  }
}
