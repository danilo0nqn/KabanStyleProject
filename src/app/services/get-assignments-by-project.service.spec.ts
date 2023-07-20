import { TestBed } from '@angular/core/testing';

import { GetAssignmentsByProjectService } from './get-assignments-by-project.service';

describe('GetAssignmentsByProjectService', () => {
  let service: GetAssignmentsByProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAssignmentsByProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
