import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  @Output() closePopup: EventEmitter<number> = new EventEmitter<number>();
  @Input() userId!:number
  @Input() indexInTasks!: number

  onCloseButtonClick(): void {
    this.closePopup.emit(this.indexInTasks);
  }
  
}
