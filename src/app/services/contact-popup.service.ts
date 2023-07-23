import { Injectable, ViewContainerRef, ComponentRef, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactDetailsThroughPopupComponent } from '../components/contact-details-through-popup/contact-details-through-popup.component';


@Injectable({
  providedIn: 'root'
})
export class ContactPopupService {
  private contactDetailsComponent!: ComponentRef<ContactDetailsThroughPopupComponent>
  private openButtonShow$ = new BehaviorSubject<boolean>(true);
  openButtonShowStatus$ = this.openButtonShow$.asObservable();
  
  constructor() { }

  openPopup(container: ViewContainerRef, id:number) {
    this.contactDetailsComponent = container.createComponent(ContactDetailsThroughPopupComponent);
    this.contactDetailsComponent.instance.userId = id;
    this.contactDetailsComponent.instance.ownerOpen = false;
    this.setOpenButtonShowStatus(false)
    this.contactDetailsComponent.instance.closePopup.subscribe(() => {
      this.destroyPopup();
    });
  }

  destroyPopup(): void {
    if (this.contactDetailsComponent) {
      this.contactDetailsComponent.destroy();
    }
  }

  setOpenButtonShowStatus(open: boolean) {
    this.openButtonShow$.next(open);
  }

}
