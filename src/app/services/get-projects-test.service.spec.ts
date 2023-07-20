import { TestBed } from '@angular/core/testing';

import { GetProjectsTestService } from './get-projects-test.service';

describe('GetProjectsTestService', () => {
  let service: GetProjectsTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProjectsTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
