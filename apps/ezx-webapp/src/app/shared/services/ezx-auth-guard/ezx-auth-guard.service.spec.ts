import { TestBed } from '@angular/core/testing';

import { EzxAuthGuardService } from './ezx-auth-guard.service';

describe('EzxAuthGuardService', () => {
  let service: EzxAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzxAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
