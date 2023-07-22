import { Injectable, ViewContainerRef, ComponentRef, Component } from '@angular/core';
import { AssignmentComponent } from '../components/assignment/assignment.component';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactPopupService {
  private assignmentComponent!: ComponentRef<AssignmentComponent>
  private openButtonShow$ = new BehaviorSubject<boolean>(true);
  openButtonShowStatus$ = this.openButtonShow$.asObservable();
  
  constructor() { }

  openPopup(container: ViewContainerRef, id:number) {
    this.assignmentComponent = container.createComponent(AssignmentComponent);
    this.assignmentComponent.instance.userId = id;
    this.assignmentComponent.instance.ownerOpen = false;
    this.setOpenButtonShowStatus(false)
    console.log("En el servicio, le mando false al ownerOpen del assignment component")
    this.assignmentComponent.instance.closePopup.subscribe(() => {
      this.destroyPopup();
    });
  }

  destroyPopup(): void {
    if (this.assignmentComponent) {
      this.assignmentComponent.destroy();
    }
  }

  setOpenButtonShowStatus(open: boolean) {
    this.openButtonShow$.next(open);
  }

}
