import { TestBed } from '@angular/core/testing';

import { EzxAuthService } from './ezx-auth.service';

describe('EzxAuthService', () => {
  let service: EzxAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzxAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
