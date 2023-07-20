import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { ContactPopupService } from 'src/app/services/contact-popup.service';
import { ContactDetailsComponent } from 'src/app/components/contact-details/contact-details.component';


@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent {
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) popupContainer!: ViewContainerRef;

  private popupComponent: ComponentRef<ContactDetailsComponent> | undefined;
  assignments: any[] = []; 
  
  constructor(private contactPopupService: ContactPopupService ){}
  
  popup(id: number){
    this.contactPopupService.openPopup(this.popupContainer, id)
  }

}
