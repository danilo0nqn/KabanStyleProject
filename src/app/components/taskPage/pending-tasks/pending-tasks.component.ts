import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { ContactPopupService } from 'src/app/services/contact-popup.service';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss']
})
export class PendingTasksComponent implements OnInit{
  @ViewChildren('popupContainer', { read: ViewContainerRef}) public popupContainers!: QueryList<ViewContainerRef>;
  /* TODO: Cuadno cargo una tarea, guardar el ID del owner para la ventana popup */
  @Input() pendingAssignments!: Assignment[]
  ownerOpen:boolean = true;

  constructor(private contactPopupService: ContactPopupService){
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
}
