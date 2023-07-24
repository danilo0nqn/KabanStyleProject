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
  id!: number;
  createdProjectId!: number;

  errorNewProject: string = '';

  constructor(private newProjectService: NewProjectService, private router: Router, private profileLoader : ProfileLoaderService){}

  ngOnInit(): void {
    this.storedId = sessionStorage.getItem('userId');
    this.id = 0;
    if (this.storedId != null) {
      this.id = parseInt(this.storedId, 10);
    }
  }

  newProject(value: any){
    this.newProjectService.newProject(value).subscribe(
      (response) => {
        console.log("Projecto creado correctamente!")
      },
      (error) => {
        console.error(`Ha habido un error al intentar crear el projecto ${error}`);
      },
      () => {
        console.info('proceso de creacion de projecto ha finalizado');
        this.profileLoader.loadProjectsAssignments(this.id)
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
