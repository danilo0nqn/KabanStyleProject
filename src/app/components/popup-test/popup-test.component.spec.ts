import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTestComponent } from './popup-test.component';

describe('PopupTestComponent', () => {
  let component: PopupTestComponent;
  let fixture: ComponentFixture<PopupTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupTestComponent]
    });
    fixture = TestBed.createComponent(PopupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
