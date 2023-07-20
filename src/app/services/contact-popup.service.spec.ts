import { TestBed } from '@angular/core/testing';

import { ContactPopupService } from './contact-popup.service';

describe('ContactPopupService', () => {
  let service: ContactPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
