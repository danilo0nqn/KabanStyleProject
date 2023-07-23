import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { ContactPopupService } from 'src/app/services/contact-popup.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss'],
})
export class PendingTasksComponent implements OnInit{
  @ViewChildren('popupContainer', { read: ViewContainerRef}) public popupContainers!: QueryList<ViewContainerRef>;
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

/* TERMINAR LOS BOTONES DE TAKE TASK Y SEND BACK TO ONGOING */
  /* ARREGLAR EL CONTACT DETAILS */
  /* ARRELGAR HACER NEW ASSIGNMENT */
  /* AGREGAR DELETE PROJECT */
  /* AGREGAR EDITAR CONTACTO EN HOME PAGE */
}
