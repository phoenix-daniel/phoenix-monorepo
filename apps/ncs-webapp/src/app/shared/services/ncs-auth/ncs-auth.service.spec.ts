import { TestBed } from '@angular/core/testing';

import { NcsAuthService } from './ncs-auth.service';

describe('NcsAuthService', () => {
  let service: NcsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
