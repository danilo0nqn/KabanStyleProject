import { TestBed } from '@angular/core/testing';

import { UrgentAssignmentsByUserService } from './urgent-assignments-by-user.service';

describe('UrgentAssignmentsByUserService', () => {
  let service: UrgentAssignmentsByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrgentAssignmentsByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
