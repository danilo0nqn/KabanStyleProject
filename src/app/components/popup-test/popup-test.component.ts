import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-test',
  templateUrl: './popup-test.component.html',
  styleUrls: ['./popup-test.component.scss']
})
export class PopupTestComponent {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  onCloseButtonClick(): void {
    this.closePopup.emit();
  }

}
