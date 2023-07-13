import { TestBed } from '@angular/core/testing';

import { ProfileLoaderService } from './profile-loader.service';

describe('ProfileLoaderService', () => {
  let service: ProfileLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
