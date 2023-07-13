import { TestBed } from '@angular/core/testing';

import { RandomProfileService } from './random-profile.service';

describe('RandomProfileService', () => {
  let service: RandomProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
