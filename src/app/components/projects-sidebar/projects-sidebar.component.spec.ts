import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSidebarComponent } from './projects-sidebar.component';

describe('ProjectsSidebarComponent', () => {
  let component: ProjectsSidebarComponent;
  let fixture: ComponentFixture<ProjectsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSidebarComponent]
    });
    fixture = TestBed.createComponent(ProjectsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
