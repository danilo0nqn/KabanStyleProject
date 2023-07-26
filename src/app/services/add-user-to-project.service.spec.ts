import { TestBed } from '@angular/core/testing';

import { AddUserToProjectService } from './add-user-to-project.service';

describe('AddUserToProjectService', () => {
  let service: AddUserToProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserToProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
