import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { UrgentAssignmentsByUserService } from 'src/app/services/urgent-assignments-by-user.service';


@Component({
  selector: 'app-urgent-tasks',
  templateUrl: './urgent-tasks.component.html',
  styleUrls: ['./urgent-tasks.component.scss']
})
export class UrgentTasksComponent implements OnInit{
  userAssignments! : Assignment[]
  userId!: number;
  storedId!: string | null;
  noAssignments: boolean = false;
  noUrgentTasks:boolean = false;
  
  constructor( private urgentAssignmentsByUserService : UrgentAssignmentsByUserService){
    this.storedId = sessionStorage.getItem('userId')
  }
  
  ngOnInit(): void {
    if( this.storedId != null) {
      this.userId = parseInt(this.storedId, 10);
    }

    this.urgentAssignmentsByUserService.getUrgentsAssignmentsByUser(this.userId).subscribe(
      (responseAssignments) => {
        console.log(responseAssignments)
        if (responseAssignments.length == 0){
          this.noAssignments = true;
          this.noUrgentTasks = true;
          console.log("no hay tareas urgentes")
        } else{
          this.noUrgentTasks = false;
          this.userAssignments = responseAssignments
        }
        console.log(this.userAssignments)
      },
      (error) =>{
        console.error(`Ha habido un error al intentar las tareas Urgentes del usuario ${error}`);
      },
      () => console.info('proceso de cargado de tareas Urgentes a finalizado')
    );
  }


}
