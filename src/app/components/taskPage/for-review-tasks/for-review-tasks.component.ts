import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentsManagementService } from 'src/app/services/assignments-management.service';

@Component({
  selector: 'app-for-review-tasks',
  templateUrl: './for-review-tasks.component.html',
  styleUrls: ['./for-review-tasks.component.scss']
})
export class ForReviewTasksComponent {
  @Input() forReviewAssignments!: Assignment[]
  @Output() reloadAssignments: EventEmitter<void> = new EventEmitter<void>()
  showContactDetailsMap: { [key: number]: boolean } = {};
  indexInTasks!: number
  storedId!: string | null;
  userId!: number

  constructor(private assignmentManagement: AssignmentsManagementService){
    this.storedId = sessionStorage.getItem('userId')
    if(this.storedId){
      this.userId = parseInt(this.storedId, 10)
    }

    /* CHANGE TO FALSE WHEN CONTACT DETAILSE IS OVER */
    this.showContactDetailsMap[0] = true;


  }

  showContactDetail(index: number){
    this.showContactDetailsMap[index] = true;
  }

  closeContactDetail(index:number){
    this.showContactDetailsMap[index] = false;
  }

  resendToOngoing(id: number, projectId: number, stage: number, beingDoneById: number){
    stage --;
    let data = [this.userId, projectId, id, beingDoneById, stage]
    this.assignmentManagement.assignmentManagement(data).subscribe(
      (response) => {},
      (error) => {console.error(`couldn't leave the task: ${error}`)},
      () => {this.setReloadAssignments()}
    )
  }

  sendToCompleted(id: number, projectId: number, stage: number, beingDoneById: number){
    stage ++;
    let data = [this.userId, projectId, id, beingDoneById, stage]
    this.assignmentManagement.assignmentManagement(data).subscribe(
      (response) => {},
      (error) => {console.error(`couldnt send the task to review: ${error}`)},
      () => {this.setReloadAssignments()}
    )
  }

  setReloadAssignments(){
    this.reloadAssignments.emit()
  }
}
