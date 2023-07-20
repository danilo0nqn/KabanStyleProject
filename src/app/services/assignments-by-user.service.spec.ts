import { TestBed } from '@angular/core/testing';

import { AssignmentsByUserService } from './assignments-by-user.service';

describe('AssignmentsByUserService', () => {
  let service: AssignmentsByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentsByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
