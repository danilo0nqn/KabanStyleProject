import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-for-review-tasks',
  templateUrl: './for-review-tasks.component.html',
  styleUrls: ['./for-review-tasks.component.scss']
})
export class ForReviewTasksComponent {
  @Input() forReviewAssignments!: Assignment[]
  showContactDetailsMap: { [key: number]: boolean } = {};
  indexInOngoingTasks!: number

  showContactDetail(index: number){
    this.showContactDetailsMap[index] = true;
  }

  closeContactDetail(index:number){
    this.showContactDetailsMap[index] = false;
  }
}
