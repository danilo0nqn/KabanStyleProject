import { TestBed } from '@angular/core/testing';

import { LoadingResolverService } from './loading-resolver.service';

describe('LoadingResolverService', () => {
  let service: LoadingResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
