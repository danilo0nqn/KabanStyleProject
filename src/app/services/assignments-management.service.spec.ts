import { TestBed } from '@angular/core/testing';

import { AssignmentsManagementService } from './assignments-management.service';

describe('AssignmentsOfTasksService', () => {
  let service: AssignmentsOfTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
