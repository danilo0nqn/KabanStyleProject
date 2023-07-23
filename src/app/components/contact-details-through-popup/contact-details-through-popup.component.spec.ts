import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsThroughPopupComponent } from './contact-details-through-popup.component';

describe('ContactDetailsThroughPopupComponent', () => {
  let component: ContactDetailsThroughPopupComponent;
  let fixture: ComponentFixture<ContactDetailsThroughPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailsThroughPopupComponent]
    });
    fixture = TestBed.createComponent(ContactDetailsThroughPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
