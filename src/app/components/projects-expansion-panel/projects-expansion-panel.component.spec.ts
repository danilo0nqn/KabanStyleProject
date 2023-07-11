import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsExpansionPanelComponent } from './projects-expansion-panel.component';

describe('ProjectsExpansionPanelComponent', () => {
  let component: ProjectsExpansionPanelComponent;
  let fixture: ComponentFixture<ProjectsExpansionPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsExpansionPanelComponent]
    });
    fixture = TestBed.createComponent(ProjectsExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
