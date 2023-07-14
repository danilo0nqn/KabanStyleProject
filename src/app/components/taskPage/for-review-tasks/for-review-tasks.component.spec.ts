import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForReviewTasksComponent } from './for-review-tasks.component';

describe('ForReviewTasksComponent', () => {
  let component: ForReviewTasksComponent;
  let fixture: ComponentFixture<ForReviewTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForReviewTasksComponent]
    });
    fixture = TestBed.createComponent(ForReviewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
