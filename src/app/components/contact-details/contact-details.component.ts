import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  onCloseButtonClick(): void {
    this.closePopup.emit();
  }
}
