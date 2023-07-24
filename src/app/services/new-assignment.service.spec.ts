import { TestBed } from '@angular/core/testing';

import { NewAssignmentService } from './new-assignment.service';

describe('NewAssignmentService', () => {
  let service: NewAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
