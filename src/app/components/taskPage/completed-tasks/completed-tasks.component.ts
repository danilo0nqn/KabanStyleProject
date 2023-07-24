import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {
  
  @Input() completedAssignments!: Assignment[]
  showContactDetailsMap: { [key: number]: boolean } = {};
  indexInTasks!: number

  showContactDetail(index: number){
    this.showContactDetailsMap[index] = true;
  }

  closeContactDetail(index:number){
    this.showContactDetailsMap[index] = false;
  }
}
