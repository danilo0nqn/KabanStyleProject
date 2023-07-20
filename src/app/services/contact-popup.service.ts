import { Injectable, ViewContainerRef, ComponentRef, Component } from '@angular/core';
import { PopupTestComponent } from '../components/popup-test/popup-test.component';


@Injectable({
  providedIn: 'root'
})
export class ContactPopupService {
  private popupComponent: ComponentRef<PopupTestComponent> | undefined;

  contactID?: number 
  
  constructor() { }

  openPopup(container: ViewContainerRef, id:number) {
    this.contactID = id
    this.popupComponent = container.createComponent(PopupTestComponent);
    this.popupComponent.instance.closePopup.subscribe(() => {
      this.destroyPopup();
    });
  }

  destroyPopup(): void {
    if (this.popupComponent) {
      this.popupComponent.destroy();
    }
  }
}
