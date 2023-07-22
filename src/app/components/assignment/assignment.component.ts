import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ContactPopupService } from 'src/app/services/contact-popup.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent{
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Input() userId!:number;
  ownerOpen:boolean = false;

  constructor(private contactPopupService: ContactPopupService){}


  closeAssignmentPopup(): void {
    this.closePopup.emit();
    this.ownerOpen = true;
    this.contactPopupService.setOpenButtonShowStatus(this.ownerOpen);
    console.log(this.ownerOpen + " En el componente assignment pero en el method close assigmnet popup")
  }
}
