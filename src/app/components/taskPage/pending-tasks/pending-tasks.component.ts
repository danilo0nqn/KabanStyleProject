import { Component, Input, ViewContainerRef, QueryList, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { ContactPopupService } from 'src/app/services/contact-popup.service';
import { AssignmentsManagementService } from 'src/app/services/assignments-management.service';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss'],
})
export class PendingTasksComponent implements OnInit{
  @ViewChildren('popupContainer', { read: ViewContainerRef}) public popupContainers!: QueryList<ViewContainerRef>;
  @Input() pendingAssignments!: Assignment[]
  @Output() reloadAssignments: EventEmitter<void> = new EventEmitter<void>();
  ownerOpen:boolean = true;
  userId!: number;
  storedId!: string | null; 

  constructor(private contactPopupService: ContactPopupService, private assignmentManagment: AssignmentsManagementService){
    this.storedId = sessionStorage.getItem('userId')
    if (this.storedId){
      this.userId = parseInt(this.storedId, 10);
    }
  }

  ngOnInit(): void {
    this.contactPopupService.openButtonShowStatus$.subscribe((value) => {
      this.ownerOpen = value;
      console.log(this.ownerOpen + " En openPopup method")
    });
  }
  
  openPopup(id: number, index: number){
    const popupContainer = this.popupContainers.get(index)
    if (popupContainer){
      this.contactPopupService.openPopup(popupContainer, id)
    }
  }

  takeAssignment(id: number, projectId: number, stage: number){
    stage ++;
    let beingDoneById = this.userId;
    let data = [this.userId, projectId, id, beingDoneById, stage]
    this.assignmentManagment.assignmentManagement(data).subscribe(
      (response) => {},
      (error) => {console.log(`take task not ok ${error}`)},
      () => {this.reloadAssignments.emit();}
    )
  }
}
