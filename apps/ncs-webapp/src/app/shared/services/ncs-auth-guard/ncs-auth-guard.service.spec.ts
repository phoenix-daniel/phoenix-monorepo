import { TestBed } from '@angular/core/testing';

import { NcsAuthGuardService } from './ncs-auth-guard.service';

describe('NcsAuthGuardService', () => {
  let service: NcsAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcsAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
