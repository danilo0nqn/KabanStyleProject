import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-ongoing-tasks',
  templateUrl: './ongoing-tasks.component.html',
  styleUrls: ['./ongoing-tasks.component.scss']
})

export class OngoingTasksComponent {

  @Input() ongoingAssignments!: Assignment[]
  showContactDetailsMap: { [key: number]: boolean } = {};
  indexInOngoingTasks!: number

  showContactDetail(index: number){
    this.showContactDetailsMap[index] = true;
  }

  closeContactDetail(index:number){
    this.showContactDetailsMap[index] = false;
  }
  
}
