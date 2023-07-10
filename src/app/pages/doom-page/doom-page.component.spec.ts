import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoomPageComponent } from './doom-page.component';

describe('DoomPageComponent', () => {
  let component: DoomPageComponent;
  let fixture: ComponentFixture<DoomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoomPageComponent]
    });
    fixture = TestBed.createComponent(DoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
